import React from 'react';
import mockData from './mock.json';
import * as S from './styled';

export const Table = () => {
    const columns = [
        {
            title: '№',
            render: (id, record, index) => <div key={index}>{index}</div>,
        },
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'ИНН заказчика',
            dataIndex: 'customerInn',
        },
        {
            title: 'Заказчик',
            dataIndex: 'customer',
        },
        {
            title: 'ИНН поставщика',
            dataIndex: 'supplier',
        },
        {
            title: 'Поставщик',
            dataIndex: 'supplier',
        },
        {
            title: 'Период',
            dataIndex: 'period',
            render: (period, index) => (
                <div key={index}>
                    <span>{period.dateFrom}</span>
                    <span>-</span>
                    <span>{period.dateFrom}</span>
                </div>
            ),
        },
        {
            title: 'Цена контракта',
            dataIndex: 'price',
        },
    ];

    return (
        <S.Wrapper>
            <S.Status>Таблица!</S.Status>
            <S.Table
                dataSource={mockData}
                columns={columns}
                pagination={false}
            />
        </S.Wrapper>
    );
};
