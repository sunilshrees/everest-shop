import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <div className='nav-center'>
                <div>FREE SHIPPING ON ALL ORDERS</div>
                <div>+01-098765 , +977-9812345678</div>
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.nav`
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clr-dark);
    color: var(--clr-white);

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export default Header;
