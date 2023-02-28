import InfoIcon from '@/common/components/icons/info';
import { convertTimeStampToFormattedTime } from '@/common/utils/convertTimeStampToFormattedTime';
import { convertTimeStampToPersianDate } from '@/common/utils/convertTimeStampToPersianDate';
import { BookStatus } from '@/modules/myTurn/types/bookStatus';
import { CenterType } from '@/modules/myTurn/types/centerType';
import { createElement } from 'react';

type Patient = {
  name: string;
  cell: string;
  nationalCode: string;
  selectServeis: string;
};
interface TurnDetailsDataParam {
  data: {
    bookTime: number;
    waitingTime?: string;
    turnStatus?: string;
    trackingCode: string;
    doctorPhone?: string;
    durationConversation?: string;
    centerName: string;
    receiptLink?: string;
    centerPhone?: string;
    address?: string;
    centerId: string;
    patientInfo: Patient;
    rules?: string[];
  };
  centerType: CenterType;
}

export const turnDetailsData = ({ data, centerType }: TurnDetailsDataParam) => {
  const {
    bookTime,
    trackingCode,
    waitingTime,
    centerName,
    centerPhone,
    address,
    centerId,
    patientInfo,
    receiptLink,
    rules,
    doctorPhone,
    durationConversation,
    turnStatus,
  } = data;

  const dateTime = `${convertTimeStampToFormattedTime(bookTime)} - ${convertTimeStampToPersianDate(bookTime)}`;

  const lists = [
    {
      id: 1,
      name: centerType === CenterType.consult ? 'زمان ارتباط با پزشک' : 'زمان تقریبی نوبت',
      value: dateTime,
      shouldShow: turnStatus !== BookStatus.requested,
      type: 'Text',
      isBoldValue: true,
    },
    {
      id: 2,
      name: 'توضیحات',
      value:
        turnStatus === BookStatus.requested
          ? `بیمار عزیز این درخواست به معنی ثبت نوبت نمیباشد. نتیجه درخواست شما پس از بررسی توسط مرکز درمانی از طریق پیامک به شما اطلاع داده می شود. همینطور شما میتوانید وضعیت درخواست خود را از طریق صفحه نوبت های من مشاهده کنید.`
          : 'زمان نوبت اعلام شده، برای حضور در مرکز درمانی بوده و با زمان ویزیت تفاوت دارد.',
      shouldShow: centerType == CenterType.clinic,
      icon: createElement(InfoIcon, {
        className: 'text-orange-500',
      }),
      type: 'Label',
      isBoldValue: true,
    },
    {
      id: 4,
      name: ` میانگین زمان انتظار در مرکز`,
      value: waitingTime,
      shouldShow: !!waitingTime && centerType === CenterType.clinic && turnStatus !== BookStatus.requested,
      type: 'Text',
      isBoldValue: false,
    },
    {
      id: 6,
      name: 'نام مرکز',
      value: centerName,
      shouldShow: centerType !== CenterType.consult,
      type: 'Text',
      isBoldValue: false,
    },
    {
      id: 7,
      name: 'تماس با مرکز درمانی',
      value: centerPhone,
      buttonAction: () => {
        return (location.href = 'tel:${centerPhone}');
      },
      shouldShow: !!centerPhone && centerType === CenterType.clinic,
      type: 'Button',
    },
    {
      id: 8,
      name: 'آدرس مرکز',
      value: address,
      shouldShow: centerId !== '5532',
      type: 'Text',
      isBoldValue: false,
    },
    {
      id: 12,
      name: 'خدمت انتخاب شده',
      value: patientInfo.selectServeis,
      shouldShow: centerType === CenterType.clinic && turnStatus !== BookStatus.requested,
      type: 'Text',
      isBoldValue: false,
    },
    {
      id: 14,
      name: 'لینک قبض نوبت',
      value: receiptLink,
      copyable: true,
      shouldShow: centerType === CenterType.consult,
      type: 'Text',
      isBoldValue: false,
    },
    {
      id: 15,
      name: 'اطلاعات بیمار',
      value: [
        {
          name: 'نام بیمار',
          value: patientInfo.name,
          type: 'Text',
        },
        {
          name: 'کدملی',
          value: patientInfo.nationalCode,
          type: 'Text',
        },
        {
          name: 'شماره موبایل',
          value: patientInfo.cell,
          type: 'Text',
        },
      ],
      shouldShow: turnStatus !== BookStatus.requested,
      type: 'Accordion',
    },
    {
      id: 15,
      name: centerType === CenterType.consult ? 'نحوه ویزیت آنلاین' : 'قوانین',
      value: rules?.map((items, index) => ({
        id: index,
        name: items,
        type: 'Label',
      })),
      shouldShow: !!rules && centerType === CenterType.clinic,
      type: 'Accordion',
    },
    {
      id: 16,
      name: 'نحوه ویزیت آنلاین',
      value: rules,
      shouldShow: centerType === CenterType.consult,
      type: 'Label',
    },
  ];

  return lists.filter(({ shouldShow }) => shouldShow);
};
