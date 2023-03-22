import React from "react";
import { Theme } from "../interfaces/Theme";

interface Props {
  theme: Theme,
}

export const Comment = ({theme}: Props) => {
  return (
    <div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0459 2.24199L9.89795 2.23199H9.89595C5.52195 2.23199 2.09595 5.65899 2.09595 10.034C2.09595 14.132 5.28195 17.24 9.56095 17.404V21.232C9.56095 21.34 9.60495 21.518 9.68095 21.635C9.82295 21.86 10.0649 21.982 10.3129 21.982C10.4509 21.982 10.5899 21.944 10.7149 21.864C10.9789 21.696 17.1879 17.724 18.8029 16.358C20.7049 14.748 21.8429 12.388 21.8459 10.046V10.029C21.8399 5.66199 18.4159 2.24199 14.0459 2.24099V2.24199ZM17.8329 15.214C16.6989 16.174 12.9709 18.619 11.0609 19.857V16.67C11.0609 16.256 10.7259 15.92 10.3109 15.92H9.91495C6.25495 15.92 3.59695 13.444 3.59695 10.034C3.59695 6.49999 6.36495 3.73199 9.89695 3.73199L14.0439 3.74199H14.0459C17.5779 3.74199 20.3459 6.50799 20.3479 10.038C20.3449 11.948 19.4059 13.882 17.8339 15.214H17.8329Z" fill={theme === "DarkTheme" ? '#8899a6' : '#5b7083'} />
      </svg>
    </div>
  )
}

export const Retweet = ({theme}: Props) => {
  return (
    <div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.64998C20.49 5.58198 18.807 3.89998 16.74 3.89998H10.89C10.476 3.89998 10.14 4.23598 10.14 4.64998C10.14 5.06398 10.476 5.39998 10.89 5.39998H16.74C17.98 5.39998 18.99 6.40998 18.99 7.64998V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67V15.67ZM13.11 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.45998L7.22997 8.67998C7.37797 8.82698 7.56997 8.89997 7.76197 8.89997C7.95397 8.89997 8.14597 8.82698 8.29197 8.67998C8.58497 8.38698 8.58497 7.91198 8.29197 7.61998L4.79197 4.11998C4.49897 3.82598 4.02397 3.82598 3.73197 4.11998L0.231975 7.61998C-0.0620254 7.91198 -0.0620254 8.38698 0.231975 8.67998C0.525975 8.97298 0.998975 8.97298 1.29197 8.67998L3.51197 6.45998V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" fill={theme === "DarkTheme" ? '#8899a6' : '#5b7083'}/>
      </svg>
    </div>
  )
}

export const Like = ({theme}: Props) => {
  return (
    <div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z" fill={theme === "DarkTheme" ? '#8899a6' : '#5b7083'}/>
      </svg>
    </div>
  )
}

export const Share = ({theme}: Props) => {
  return (
    <div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.53 7.46999L12.53 2.46999C12.237 2.17699 11.762 2.17699 11.47 2.46999L6.47001 7.46999C6.17601 7.76299 6.17601 8.23799 6.47001 8.52999C6.76401 8.82199 7.23701 8.82399 7.53001 8.52999L11.25 4.80999V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.80999L16.47 8.52999C16.616 8.67699 16.808 8.74999 17 8.74999C17.192 8.74999 17.384 8.67799 17.53 8.52999C17.823 8.23699 17.823 7.76299 17.53 7.46999Z" fill={theme === "DarkTheme" ? '#8899a6' : '#5b7083'}/>
        <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z" fill={theme === "DarkTheme" ? '#8899a6' : '#5b7083'}/>
      </svg>

    </div>
  )
}