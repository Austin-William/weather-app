import React from 'react';
import { LiaTimesCircle } from 'react-icons/lia';
import { BsListNested } from 'react-icons/bs';

import "../styles/components/Drawer.scss";

interface DrawerProps {
    children: React.ReactNode;
}

interface ButtonDrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface DrawerContentProps {
    children: React.ReactNode;
}

function ButtonDrawer({ open, setOpen }: ButtonDrawerProps) {
    return (
        <button className="drawer__button" onClick={() => setOpen(!open)}>
            <BsListNested className="drawer__button__icon" />
        </button>
    );
}

function DrawerContent({ children }: DrawerContentProps) {
    return (
        <div className="drawer__content">
            {children}
        </div>
    );
}

function Drawer({ children }: DrawerProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {
                open ?
                    <DrawerContent>
                        {children}
                    </DrawerContent>
                    :
                    <ButtonDrawer open={open} setOpen={setOpen} />
            }
        </>
    );
}

export default Drawer;
