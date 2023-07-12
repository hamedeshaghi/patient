import { clinicClient } from '@/common/apis/client';
import { ServerStateKeysEnum } from '@/common/apis/serverStateKeysEnum';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

interface Params {
  id: string;
}

export const inquiryPayment = async (params: Params) => {
  return await clinicClient.get(`/api/payVip/${params.id}`, {
    params: {
      certificate: getCookie('certificate'),
    },
  });
};

export const useInquiryPayment = (params: Params) => {
  return useQuery([ServerStateKeysEnum.InquiryPayment, params], () => inquiryPayment(params));
};