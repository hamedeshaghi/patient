import { useRemoveBook } from '@/common/apis/services/booking/removeBook';
import Button from '@/components/atom/button';
import DropDown from '@/components/atom/dropDown';
import Modal from '@/components/atom/modal';
import ReceiptIcon from '@/components/icons/receipt';
import ShareIcon from '@/components/icons/share';
import ThreeDotsIcon from '@/components/icons/threeDots';
import TrashIcon from '@/components/icons/trash';
import { redirectToReceoptTurn } from '@/modules/myTurn/functions/redirectToReceoptTurn';
import { useBookStore } from '@/modules/myTurn/store';
import { BookStatus } from '@/modules/myTurn/types/bookStatus';
import { CenterType } from '@/modules/myTurn/types/centerType';
import getConfig from 'next/config';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import DoctorInfo from '../../doctorInfo';
import TagStatus from '../../tagStatus';
const { publicRuntimeConfig } = getConfig();

interface TurnHeaderProps {
  id: string;
  doctorInfo: {
    avatar: string;
    firstName: string;
    lastName: string;
    expertise?: string;
    slug: string;
  };
  centerId: string;
  nationalCode: string;
  trackingCode: string;
  status: BookStatus;
  centerType: CenterType;
}

export const TurnHeader: React.FC<TurnHeaderProps> = props => {
  const { query } = useRouter();
  const { id, doctorInfo, centerId, centerType, trackingCode, nationalCode, status } = props;

  const [removeModal, setRemoveModal] = useState(false);
  const { removeBook } = useBookStore();
  const removeBookApi = useRemoveBook();

  const shouldShowRemoveTurn = status === BookStatus.notVisited || centerType === CenterType.consult;

  const removeBookAction = () => {
    removeBookApi.mutate(
      {
        center_id: centerId,
        reference_code: trackingCode,
        national_code: nationalCode,
      },
      {
        onSuccess: data => {
          if (data.data.status === 1) {
            setRemoveModal(false);
            return removeBook({ bookId: id });
          }
          toast.error(data.data.message);
        },
      },
    );
  };

  const receiptTurn = () => {
    redirectToReceoptTurn({
      slug: doctorInfo.slug,
      bookId: id,
      centerId: centerId,
    });
  };

  const shareTurn = () => {
    const link = `${publicRuntimeConfig.CLINIC_BASE_URL}/booking/${doctorInfo.slug}?id=${id}&center_id=${centerId}`;
    if (query.isWebView) return window.Android.shareQA(`رسید نوبت ${doctorInfo.firstName} ${doctorInfo.lastName}`, link);
    if (navigator.share)
      if (navigator.share)
        navigator.share({
          title: 'رسید نوبت',
          text: `رسید نوبت ${doctorInfo.firstName} ${doctorInfo.lastName}`,
          url: link,
        });
  };

  const menuItems = [
    {
      id: 0,
      name: 'قبض نوبت',
      icon: <ReceiptIcon />,
      action: receiptTurn,
      shouldShow: true,
    },
    {
      id: 1,
      name: 'اشتراک گذاری',
      icon: <ShareIcon />,
      action: shareTurn,
      shouldShow: true,
    },
    {
      id: 2,
      name: 'لغو نوبت',
      icon: <TrashIcon />,
      action: () => setRemoveModal(true),
      testId: 'drop-down__remove-button',
      shouldShow: shouldShowRemoveTurn,
    },
  ];

  return (
    <>
      <Link href={`/dr/${doctorInfo.slug}`}>
        <a className="w-9/12">
          <DoctorInfo
            avatar={doctorInfo.avatar}
            firstName={doctorInfo.firstName}
            lastName={doctorInfo.lastName}
            expertise={doctorInfo.expertise}
          />
        </a>
      </Link>

      {status !== BookStatus.notVisited && <TagStatus status={status} className="left-10" />}

      <DropDown
        element={
          <div
            className="flex items-center justify-center w-8 h-8 absolute left-2 top-3 cursor-pointer"
            data-testid="turn-drop-down-button"
          >
            <ThreeDotsIcon color="#000" />
          </div>
        }
        items={menuItems.filter(item => item.shouldShow).map(({ shouldShow, ...item }) => ({ ...item }))}
      />

      <Modal title="آیا از لغو نوبت مطمئن هستید؟" onClose={setRemoveModal} isOpen={removeModal}>
        <div className="flex space-s-2">
          <Button theme="error" block onClick={removeBookAction} loading={removeBookApi.isLoading} data-testid="modal__remove-turn-button">
            لغو نوبت
          </Button>
          <Button
            theme="error"
            variant="secondary"
            block
            onClick={() => setRemoveModal(false)}
            data-testid="modal__cancel-remove-turn-button"
          >
            انصراف
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default TurnHeader;
