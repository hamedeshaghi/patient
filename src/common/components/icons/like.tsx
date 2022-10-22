import { memo, SVGAttributes } from 'react';

interface Props extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
  color?: string;
}

export const LikeIcon = memo(({ color, ...rest }: Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1095 3.01384C13.2562 2.84617 13.4681 2.75 13.6909 2.75C14.2456 2.75 14.6195 3.31713 14.401 3.82695L12.3106 8.70456C12.2113 8.93628 12.2351 9.2024 12.3739 9.41287C12.5127 9.62334 12.7479 9.75 13 9.75H15.763C16.9893 9.75 17.8262 9.75189 18.4359 9.84046C19.0266 9.92628 19.2468 10.0735 19.3749 10.2413C19.503 10.409 19.5871 10.6602 19.5145 11.2526C19.4395 11.8641 19.2212 12.672 18.8985 13.8551L18.0803 16.8551C17.8823 17.5813 17.7497 18.0625 17.6063 18.4177C17.4703 18.7544 17.3537 18.8997 17.2312 18.9934C17.1086 19.087 16.9377 19.1613 16.5771 19.2039C16.1966 19.2488 15.6975 19.25 14.9448 19.25H10C9.03599 19.25 8.38843 19.2484 7.90539 19.1835C7.44393 19.1214 7.24643 19.0142 7.11612 18.8839C6.9858 18.7536 6.87858 18.5561 6.81654 18.0946C6.75159 17.6116 6.75 16.964 6.75 16V11.5029C6.75 10.7047 6.7611 10.4949 6.82987 10.3118C6.89865 10.1288 7.02847 9.96355 7.55413 9.3628L13.1095 3.01384ZM13.6909 1.25C13.0356 1.25 12.4121 1.53289 11.9806 2.02608L6.42526 8.37504L6.35306 8.45746C5.93398 8.93556 5.6025 9.31373 5.42572 9.78422C5.24894 10.2547 5.24938 10.7576 5.24994 11.3934L5.25 11.5029V16L5.25 16.052C5.24997 16.9505 5.24994 17.6997 5.32991 18.2945C5.41432 18.9223 5.59999 19.4891 6.05546 19.9445C6.51093 20.4 7.07773 20.5857 7.70552 20.6701C8.3003 20.7501 9.04952 20.75 9.948 20.75H10H14.9448H14.9882C15.6859 20.75 16.2742 20.75 16.753 20.6935C17.2615 20.6334 17.7267 20.5024 18.1416 20.1854C18.5566 19.8685 18.8054 19.4541 18.9972 18.9794C19.1777 18.5324 19.3325 17.9648 19.516 17.2917L19.5274 17.2498L20.3456 14.2498L20.3613 14.1922C20.6644 13.0811 20.9135 12.1677 21.0033 11.4351C21.097 10.671 21.0392 9.94904 20.5669 9.33077C20.0947 8.71249 19.4134 8.46673 18.6515 8.35604C17.9212 8.24994 16.9744 8.24997 15.8227 8.25L15.763 8.25H14.1374L15.7798 4.41783C16.4225 2.91821 15.3224 1.25 13.6909 1.25ZM3.75 10C3.75 9.58579 3.41421 9.25 3 9.25C2.58579 9.25 2.25 9.58579 2.25 10V20C2.25 20.4142 2.58579 20.75 3 20.75C3.41421 20.75 3.75 20.4142 3.75 20L3.75 10Z"
      fill={color ?? '#22282F'}
    />
  </svg>
));

export default LikeIcon;
