import { BookStatus } from "@/types/bookStatus";
import { CenterType } from "@/types/centerType";

export interface TurnProps {
  status: BookStatus;
  id: string;
  centerType: CenterType;
  centerInfo: {
    centerId: string;
    centerType: string;
    hasPaging: boolean;
  };
  doctorInfo: {
    avatar: string;
    firstName: string;
    lastName: string;
    expertise?: string;
    slug: string;
    whatsapp?: string;
  };
  patientInfo: {
    nationalCode: string;
  };
  turnDetails: {
    bookTime: number;
    waitingTime?: string;
    trackingCode: string;
  };
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  feedbackUrl: string | null;
  prescription?: {
    pdf?: string;
  };
}
