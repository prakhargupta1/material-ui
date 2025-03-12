import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function CommunitySupportIcon({ idPrefix = '' }: { idPrefix?: string }) {
  const gradientId = `${idPrefix}community-gradient`;
  return (
    <SvgIcon inheritViewBox>
      <path
        d="M10.92 12.75L12 11.93L13.07 12.74C13.46 13.03 13.99 12.66 13.85 12.19L13.43 10.83L14.63 9.88C15 9.6 14.79 9 14.31 9H12.91L12.48 7.66C12.33 7.2 11.68 7.2 11.53 7.66L11.09 9H9.68C9.21 9 9 9.6 9.37 9.89L10.56 10.84L10.14 12.2C10 12.67 10.53 13.04 10.92 12.75ZM6 21.61C6 22.29 6.67 22.77 7.32 22.56L12 21L16.68 22.56C17.33 22.78 18 22.3 18 21.61V15.28C19.24 13.87 20 12.03 20 10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10C4 12.03 4.76 13.87 6 15.28V21.61ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4Z"
        fill="currentColor"
      />
      <path
        d="M10.92 12.75L12 11.93L13.07 12.74C13.46 13.03 13.99 12.66 13.85 12.19L13.43 10.83L14.63 9.88C15 9.6 14.79 9 14.31 9H12.91L12.48 7.66C12.33 7.2 11.68 7.2 11.53 7.66L11.09 9H9.68C9.21 9 9 9.6 9.37 9.89L10.56 10.84L10.14 12.2C10 12.67 10.53 13.04 10.92 12.75ZM6 21.61C6 22.29 6.67 22.77 7.32 22.56L12 21L16.68 22.56C17.33 22.78 18 22.3 18 21.61V15.28C19.24 13.87 20 12.03 20 10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10C4 12.03 4.76 13.87 6 15.28V21.61ZM12 4C15.31 4 18 6.69 18 10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10C6 6.69 8.69 4 12 4Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.8"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="6.53333"
          y1="4.92031"
          x2="21.1146"
          y2="18.9651"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6947E" />
          <stop offset="0.2" stopColor="#8F6959" />
          <stop offset="0.475" stopColor="#F8DAC8" />
          <stop offset="0.67" stopColor="#AC836E" />
          <stop offset="0.83" stopColor="#B6947E" />
          <stop offset="1" stopColor="#F8DCCB" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

export function ProSupportIcon({ idPrefix = '' }: { idPrefix?: string }) {
  const gradientId = `${idPrefix}pro-gradient`;
  return (
    <SvgIcon inheritViewBox>
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill="currentColor"
      />
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.8"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="16.8667"
          y1="3.23391"
          x2="0.741029"
          y2="18.9648"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDFFFE" />
          <stop offset="0.23" stopColor="#7ABBAC" />
          <stop offset="0.39" stopColor="#B1FFEF" />
          <stop offset="0.535" stopColor="#8AD2C3" />
          <stop offset="0.745" stopColor="#CFFEF4" />
          <stop offset="0.915" stopColor="#6CA196" />
          <stop offset="1" stopColor="#35544E" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

export function PremiumSupportIcon({ idPrefix = '' }: { idPrefix?: string }) {
  const gradientId = `${idPrefix}premium-gradient`;
  return (
    <SvgIcon inheritViewBox>
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill="currentColor"
      />
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.8"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="6.13333"
          y1="5.98244"
          x2="20.2363"
          y2="17.0584"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C421D" />
          <stop offset="0.325272" stopColor="#FBE67B" />
          <stop offset="0.535488" stopColor="#FCFBE7" />
          <stop offset="0.769917" stopColor="#F7D14E" />
          <stop offset="1" stopColor="#D4A041" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

export function PrioritySupportIcon({ idPrefix = '' }: { idPrefix?: string }) {
  const gradientId = `${idPrefix}priority-gradient`;
  return (
    <SvgIcon inheritViewBox>
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill="currentColor"
      />
      <path
        d="M10.92 13.125L12 12.305L13.07 13.115C13.46 13.405 13.99 13.035 13.85 12.565L13.43 11.205L14.63 10.255C15 9.975 14.79 9.375 14.31 9.375H12.91L12.48 8.035C12.33 7.575 11.68 7.575 11.53 8.035L11.09 9.375H9.68C9.21 9.375 9 9.975 9.37 10.265L10.56 11.215L10.14 12.575C10 13.045 10.53 13.415 10.92 13.125ZM6 21.985C6 22.665 6.67 23.145 7.32 22.935L12 21.375L16.68 22.935C17.33 23.155 18 22.675 18 21.985V15.655C19.24 14.245 20 12.405 20 10.375C20 5.955 16.42 2.375 12 2.375C7.58 2.375 4 5.955 4 10.375C4 12.405 4.76 14.245 6 15.655V21.985ZM12 4.375C15.31 4.375 18 7.065 18 10.375C18 13.685 15.31 16.375 12 16.375C8.69 16.375 6 13.685 6 10.375C6 7.065 8.69 4.375 12 4.375Z"
        fill={`url(#${gradientId})`}
        fillOpacity="0.8"
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="5.26667"
          y1="3.14802"
          x2="22.2138"
          y2="18.1715"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCE8FE" />
          <stop offset="0.241554" stopColor="#CDA0FF" />
          <stop offset="0.4" stopColor="#8489F5" />
          <stop offset="0.713254" stopColor="#CDF1FF" />
          <stop offset="1" stopColor="#B591E9" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}

const CommunitySupportGradient = styled(Typography)(() => ({
  background: `linear-gradient(rgba(106, 81, 36, 0.5), rgba(106, 81, 36, 0.5)),
  linear-gradient(
  97deg,
  #B6947E 0%,
  #8F6959 20%,
  #F8DAC8 44%,
  #AC836E 67%,
  #8F6959 83%,
  #F8DCCB 100%
  )`,
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '15px',
  backgroundBlendMode: 'multiply',
}));

export function CommunitySupportText() {
  return <CommunitySupportGradient>Community support</CommunitySupportGradient>;
}

const ProSupportGradient = styled(Typography)(() => ({
  background: `linear-gradient(rgba(34, 76, 97, 0.5), rgba(34, 76, 97, 0.5)),
  linear-gradient(
  23deg,
  #FDFFFE 0%,
  #7ABBAC 23%,
  #B1FFEF 39%,
  #8AD2C3 54%,
  #CFFEF4 75%,
  #6CA196 100%
  )`,
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: '14px',
  fontWeight: 600,
  backgroundBlendMode: 'multiply',
}));

export function ProSupportText() {
  return <ProSupportGradient>Pro support</ProSupportGradient>;
}

const PremiumSupportGradient = styled(Typography)(() => ({
  background: `linear-gradient(rgba(122, 114, 58, 0.5), rgba(122, 114, 58, 0.5)),
  linear-gradient(
  97deg,
  #8C421D 0%,
  #FBE67B 30%,
  #FCFBE7 50%,
  #F7D14E 70%,
  #D4A041 100%
  )`,
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '15px',
  backgroundBlendMode: 'multiply',
}));

export function PremiumSupportText() {
  return <PremiumSupportGradient>Premium support</PremiumSupportGradient>;
}

const PrioritySupportGradient = styled(Typography)(() => ({
  background: `linear-gradient(rgba(79, 100, 147, 0.5), rgba(79, 100, 147, 0.5)),
    linear-gradient(
      97deg,
      #cce8fe 0%,
      #cda0ff 24%,
      #8489f5 40%,
      #cdf1ff 71%,
      #b591e9 100%
    )`,
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '15px',
  backgroundBlendMode: 'multiply',
}));

export function PrioritySupportText() {
  return <PrioritySupportGradient>Priority support</PrioritySupportGradient>;
}
