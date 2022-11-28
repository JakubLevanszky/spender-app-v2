/* eslint-disable react/prop-types */
import React from 'react';
import { DateTimeStyled } from './DateTime.styled';
import dayjs from 'dayjs';
import { FcOvertime } from 'react-icons/fc';

export default function DateTime(props) {
  const dateTime = dayjs(props.date.datetime).format('DD.MM.YYYY HH:mm:ss');
  return (
    <DateTimeStyled>
      <FcOvertime />
      {dateTime}
    </DateTimeStyled>
  );
}
