import styled from 'styled-components';
import { Table as AntdTable } from 'antd';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
`;
export const Status = styled.div`
    font-size: 20px;
    line-height: 23px;
    font-weight: bold;
`;
export const Table = styled(AntdTable)``;
