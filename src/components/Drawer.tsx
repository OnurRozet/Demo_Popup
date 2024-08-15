import React from 'react';
import { Button, Drawer } from 'antd';
import RenderContent from "./RenderContent.tsx";
import {usePopUpContext} from "../PopupProvider.tsx";


const App: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);
    const { openPopUp } = usePopUpContext();


    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Button type="primary" onClick={showLoading}>
                Open Drawer
            </Button>
            <Drawer
                closable
                destroyOnClose
                title={
                    <div>
                        Loading Drawer
                        <Button onClick={openPopUp} style={{ float: 'right' }} type={'primary'}>
                            PopUp
                        </Button>
                    </div>
                }
                placement="right"
                size={'large'}
                open={open}
                loading={loading}
                width={1000}
                onClose={() => setOpen(false)}
            >
                <Button type="primary" style={{ marginBottom: 16 }} onClick={showLoading}>
                    Reload
                </Button>
                <RenderContent />
            </Drawer>
        </>
    );
};

export default App;