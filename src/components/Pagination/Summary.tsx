import React from 'react'

type Props = {
  total: number;
  from: number;
  to: number;
}

export default function Summary(props: Props) {
  const { total, from, to } = props

  return (
    <div className="col-12 text-center text-sm-start col-sm-auto col-lg mb-3">
      Отображается с
      {' '}
      <span className="fw-semibold">{from}</span>
      {' '}
      по
      {' '}
      <span className="fw-semibold">{to}</span>
      {' '}
      для
      {' '}
      <span className="fw-semibold">{total}</span>
      {' '}
      элемента(ов)
    </div>
  )
}
