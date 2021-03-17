import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const MainMenu = () => {
    return (
        <S.Wrapper>
            <S.Status>
                <Link to="/table">Таблица тут</Link>
            </S.Status>
            <Link to="/link1">
                <S.Status>Ссылка 1</S.Status>
            </Link>
            <Link to="/link2">
                <S.Status>Ссылка 2</S.Status>
            </Link>
        </S.Wrapper>
    );
};
