import {Button, DatePicker, Form, Input, InputNumber, Mentions, Row, Select, TreeSelect} from 'antd';
import {Rnd} from "react-rnd";
import {CloseOutlined} from "@ant-design/icons";
import {useState} from "react";
import { usePopUpContext } from "../PopupProvider.tsx";

type FormValues = {
    Input?: string;
    InputNumber?: number | null;
    TextArea?: string;
    Mentions?: string;
    Select?: string;
    TreeSelect?: string;
    DatePicker?: Date | null;
}

const RenderContent = () => {
    const {showPopUp, closePopUp} = usePopUpContext();
    const [formValues, setFormValues] = useState<FormValues>();

    console.log("showPopUp", showPopUp);

    const style: React.CSSProperties = {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid 5px #ddd',
        background: 'white',
        borderRadius: "20px",
        boxShadow: "0 20px 20px rgba(0, 0, 0, 0.15)",
    };

    const form = (
        <>
            <h2>Personal Detail</h2>
            <Row>
                <Form.Item label="Input" name="Input" rules={[{required: true, message: 'Please input!'}]}>
                    <Input
                        onChange={(e) => setFormValues({...formValues, Input: e.target.value})}
                        value={formValues?.Input}
                    />
                </Form.Item>
                <Form.Item label="InputNumber" name="InputNumber" rules={[{required: true, message: 'Please input!'}]}>
                    <InputNumber
                        onChange={(value) => setFormValues({...formValues, InputNumber: value})}
                        value={formValues?.InputNumber}
                        style={{width: '100%'}}
                    />
                </Form.Item>
                <Form.Item label="TextArea" name="TextArea" rules={[{required: true, message: 'Please input!'}]}>
                    <Input.TextArea
                        onChange={(e) => setFormValues({...formValues, TextArea: e.target.value})}
                        value={formValues?.TextArea}
                    />
                </Form.Item>
                <Form.Item label="Mentions" name="Mentions" rules={[{required: true, message: 'Please input!'}]}>
                    <Mentions
                        onChange={(value) => setFormValues({...formValues, Mentions: value})}
                        value={formValues?.Mentions}
                    />
                </Form.Item>
                <Form.Item label="Select" name="Select" rules={[{required: true, message: 'Please input!'}]}>
                    <Select
                        onChange={(value) => setFormValues({...formValues, Select: value})}
                        value={formValues?.Select}
                    />
                </Form.Item>
                <Form.Item label="TreeSelect" name="TreeSelect" rules={[{required: true, message: 'Please input!'}]}>
                    <TreeSelect
                        onChange={(value) => setFormValues({...formValues, TreeSelect: value})}
                        value={formValues?.TreeSelect}
                    />
                </Form.Item>
                <Form.Item label="DatePicker" name="DatePicker" rules={[{required: true, message: 'Please input!'}]}>
                    <DatePicker
                        onChange={(date) => setFormValues({...formValues, DatePicker: date})}
                        value={formValues?.DatePicker}
                    />
                </Form.Item>
            </Row>
            <hr/>
            <h2>Contact Detail</h2>
            <Row>
                <Form.Item label="Input" name="Input" rules={[{required: true, message: 'Please input!'}]}>
                    <Input
                        onChange={(e) => setFormValues({...formValues, Input: e.target.value})}
                        value={formValues?.Input}
                    />
                </Form.Item>
                <Form.Item label="InputNumber" name="InputNumber" rules={[{required: true, message: 'Please input!'}]}>
                    <InputNumber
                        onChange={(value) => setFormValues({...formValues, InputNumber: value})}
                        value={formValues?.InputNumber}
                        style={{width: '100%'}}
                    />
                </Form.Item>
                <Form.Item label="TextArea" name="TextArea" rules={[{required: true, message: 'Please input!'}]}>
                    <Input.TextArea
                        onChange={(e) => setFormValues({...formValues, TextArea: e.target.value})}
                        value={formValues?.TextArea}
                    />
                </Form.Item>
                <Form.Item label="Mentions" name="Mentions" rules={[{required: true, message: 'Please input!'}]}>
                    <Mentions
                        onChange={(value) => setFormValues({...formValues, Mentions: value})}
                        value={formValues?.Mentions}
                    />
                </Form.Item>
                <Form.Item label="Select" name="Select" rules={[{required: true, message: 'Please input!'}]}>
                    <Select
                        onChange={(value) => setFormValues({...formValues, Select: value})}
                        value={formValues?.Select}
                    />
                </Form.Item>
                <Form.Item label="TreeSelect" name="TreeSelect" rules={[{required: true, message: 'Please input!'}]}>
                    <TreeSelect
                        onChange={(value) => setFormValues({...formValues, TreeSelect: value})}
                        value={formValues?.TreeSelect}
                    />
                </Form.Item>
                <Form.Item label="DatePicker" name="DatePicker" rules={[{required: true, message: 'Please input!'}]}>
                    <DatePicker
                        onChange={(date) => setFormValues({...formValues, DatePicker: date})}
                        value={formValues?.DatePicker}
                    />
                </Form.Item>
            </Row>
            <hr/>
            <h2>Client Info</h2>
            <Row>
                <Form.Item label="Input" name="Input" rules={[{required: true, message: 'Please input!'}]}>
                    <Input
                        onChange={(e) => setFormValues({...formValues, Input: e.target.value})}
                        value={formValues?.Input}
                    />
                </Form.Item>
                <Form.Item label="InputNumber" name="InputNumber" rules={[{required: true, message: 'Please input!'}]}>
                    <InputNumber
                        onChange={(value) => setFormValues({...formValues, InputNumber: value})}
                        value={formValues?.InputNumber}
                        style={{width: '100%'}}
                    />
                </Form.Item>
                <Form.Item label="TextArea" name="TextArea" rules={[{required: true, message: 'Please input!'}]}>
                    <Input.TextArea
                        onChange={(e) => setFormValues({...formValues, TextArea: e.target.value})}
                        value={formValues?.TextArea}
                    />
                </Form.Item>
                <Form.Item label="Mentions" name="Mentions" rules={[{required: true, message: 'Please input!'}]}>
                    <Mentions
                        onChange={(value) => setFormValues({...formValues, Mentions: value})}
                        value={formValues?.Mentions}
                    />
                </Form.Item>
                <Form.Item label="Select" name="Select" rules={[{required: true, message: 'Please input!'}]}>
                    <Select
                        onChange={(value) => setFormValues({...formValues, Select: value})}
                        value={formValues?.Select}
                    />
                </Form.Item>
                <Form.Item label="TreeSelect" name="TreeSelect" rules={[{required: true, message: 'Please input!'}]}>
                    <TreeSelect
                        onChange={(value) => setFormValues({...formValues, TreeSelect: value})}
                        value={formValues?.TreeSelect}
                    />
                </Form.Item>
                <Form.Item label="DatePicker" name="DatePicker" rules={[{required: true, message: 'Please input!'}]}>
                    <DatePicker
                        onChange={(date) => setFormValues({...formValues, DatePicker: date})}
                        value={formValues?.DatePicker}
                    />
                </Form.Item>
            </Row>

            <Form.Item wrapperCol={{offset: 6, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </>
    );

    return (
        <Form>
            {form}
            {showPopUp && (
                <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
                    <Rnd
                        style={style}
                        minWidth={"50%"}
                        //minHeight={"min-content"}
                        default={{
                            x: -400,
                            y: -900,
                            width: "100%",
                            height: "500",
                        }}
                    >
                        <div style={{maxHeight: "100%", overflowY: "auto", width: "100%"}}>
                            <CloseOutlined style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}
                                           onClick={closePopUp}/>
                            {form}
                        </div>
                    </Rnd>
                </div>
            )}
        </Form>
    );
};

export default RenderContent;