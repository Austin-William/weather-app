import React from 'react';
import { LiaTimesCircle } from 'react-icons/lia';
import { BsListNested } from 'react-icons/bs';

import SearchBar from './SearchBar';

import "../styles/components/Drawer.scss";

interface DrawerProps {
    children: React.ReactNode;
    onSearch: (search: string) => void;
}

interface ButtonDrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface DrawerContentProps {
    open: boolean;
    children: React.ReactNode;
    onSearch: (search: string) => void;
    setOpen: (open: boolean) => void;
}

function ButtonDrawer({ open, setOpen }: ButtonDrawerProps) {
    return (
        <button className="drawer__button" onClick={() => setOpen(!open)}>
            <BsListNested className="drawer__button__icon" />
        </button>
    );
}

function DrawerContent({ open, children, onSearch, setOpen }: DrawerContentProps) {
    function removeSavedCity() {
        localStorage.removeItem('search');
        window.location.reload();
    }

    return (
        <div className={open ? "drawer open" : "drawer"}>
            <div className='drawer__close'>
                <button className="drawer__button button__close" onClick={() => setOpen(false)}>
                    <LiaTimesCircle className="drawer__button__icon button__close__icon" />
                </button>
            </div>
            <div className='drawer__content'>
                <div className='drawer__search'>
                    <SearchBar onSearch={onSearch} />
                </div>
                <div className='drawer__items'>
                    {children}
                </div>
            </div>
            <div className='drawer__buttons'>
                <button className='button__reset__saved__city' onClick={removeSavedCity}>
                    <span className='button__reset__saved__city__text'>
                        Reset
                    </span>
                </button>
            </div>
        </div>
    );
}

function Drawer({ children, onSearch }: DrawerProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <ButtonDrawer open={open} setOpen={setOpen} />
            <DrawerContent open={open} setOpen={setOpen} onSearch={onSearch}>
                {children}
            </DrawerContent>
        </>
    );
}

export default Drawer;
