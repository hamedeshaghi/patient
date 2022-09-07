import { memo, SVGAttributes } from 'react';

interface Props extends Omit<SVGAttributes<SVGElement>, 'fill'> {
  fill?: boolean;
}

export const BookmarkIcon = memo(({ fill, ...rest }: Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="bg-transparent" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M19 21V9C19 6.17157 19 4.75736 18.1213 3.87868C17.2426 3 15.8284 3 13 3H11C8.17157 3 6.75736 3 5.87868 3.87868C5 4.75736 5 6.17157 5 9V21L10.0154 18.134C10.9844 17.5803 11.4689 17.3035 12 17.3035C12.5311 17.3035 13.0156 17.5803 13.9846 18.134L19 21Z"
      fill="currentColor"
      fillOpacity={fill ? 1 : 0}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9451 2.25L11 2.25H13L13.0549 2.25C14.4225 2.24998 15.5248 2.24996 16.3918 2.36652C17.2919 2.48754 18.0497 2.74643 18.6517 3.34835C19.2536 3.95027 19.5125 4.70814 19.6335 5.60825C19.75 6.47522 19.75 7.57754 19.75 8.94513V9V21C19.75 21.2674 19.6077 21.5145 19.3764 21.6487C19.1452 21.7829 18.86 21.7838 18.6279 21.6512L13.6125 18.7852C13.1154 18.5012 12.7887 18.3154 12.5212 18.1955C12.2686 18.0822 12.123 18.0535 12 18.0535C11.877 18.0535 11.7314 18.0822 11.4788 18.1955C11.2113 18.3154 10.8846 18.5012 10.3875 18.7852L5.3721 21.6512C5.13998 21.7838 4.85479 21.7829 4.62356 21.6487C4.39232 21.5145 4.25 21.2674 4.25 21V9L4.25 8.94513C4.24998 7.57754 4.24996 6.47522 4.36652 5.60825C4.48754 4.70814 4.74643 3.95027 5.34835 3.34835C5.95027 2.74643 6.70814 2.48754 7.60825 2.36652C8.47522 2.24996 9.57754 2.24998 10.9451 2.25ZM7.80812 3.85315C7.07435 3.9518 6.68577 4.13225 6.40901 4.40901C6.13225 4.68577 5.9518 5.07435 5.85315 5.80812C5.75159 6.56347 5.75 7.56458 5.75 9V19.7076L9.64334 17.4829L9.67333 17.4657C10.1322 17.2035 10.5226 16.9804 10.865 16.8268C11.2297 16.6632 11.5918 16.5535 12 16.5535C12.4082 16.5535 12.7703 16.6632 13.135 16.8268C13.4773 16.9803 13.8678 17.2035 14.3266 17.4657L14.3567 17.4828L18.25 19.7076V9C18.25 7.56458 18.2484 6.56347 18.1469 5.80812C18.0482 5.07435 17.8678 4.68577 17.591 4.40901C17.3142 4.13225 16.9257 3.9518 16.1919 3.85315C15.4365 3.75159 14.4354 3.75 13 3.75H11C9.56458 3.75 8.56347 3.75159 7.80812 3.85315Z"
      fill="currentColor"
    />
  </svg>
));

export default BookmarkIcon;