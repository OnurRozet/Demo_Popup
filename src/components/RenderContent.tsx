import {Button, Col, Form, Input, Row} from 'antd';
import {Rnd} from "react-rnd";
import {CloseOutlined} from "@ant-design/icons";
import {useState} from "react";
import {usePopUpContext} from "../PopupProvider.tsx";

type FormValues = {
    taxedUkInterest?: string;
    untaxedUkInterest?: string;
    untaxedForeignInterest?: string;
    ukDividends?: string;
    otherDividends?: string;
    foreignDividends?: string;
    taxTakenOffForeignDividends?: string;
    annualStatePension?: string;
    statePensionLumpSum?: string;
    taxTakenOffBox9?: string;
    otherNonStatePensions?: string;
    taxTakenOffBox11?: string;
    taxableIncapacityBenefit?: string;
    taxTakenOffIncapacityBenefitBox13?: string;
    jobSeekersAllowance?: string;
    totalOtherTaxableBenefits?: string;
    otherTaxableIncome?: string;
    totalAllowableExpenses?: string;
    taxTakenOffBox17?: string;
    totalOtherTaxableIncome?: string;

}

const RenderContent = () => {
    const {showPopUp, closePopUp} = usePopUpContext();
    const [formValues, setFormValues] = useState<FormValues>();

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
        <Form layout="vertical">
            {/* Section 1: Interest and dividends from UK banks and building societies */}
            <h2>Interest and dividends from UK banks and building societies</h2>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>1.</strong> Taxed UK interest</span>} name="taxedUkInterest">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxedUkInterest: e.target.value })}
                            value={formValues?.taxedUkInterest}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>2.</strong> Untaxed UK interest</span>} name="untaxedUkInterest">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, untaxedUkInterest: e.target.value })}
                            value={formValues?.untaxedUkInterest}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>3.</strong> Untaxed foreign interest (up to £2,000)</span>} name="untaxedForeignInterest">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, untaxedForeignInterest: e.target.value })}
                            value={formValues?.untaxedForeignInterest}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>4.</strong> Dividends from UK companies</span>} name="ukDividends">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, ukDividends: e.target.value })}
                            value={formValues?.ukDividends}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>5.</strong> Other dividends</span>} name="otherDividends">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, otherDividends: e.target.value })}
                            value={formValues?.otherDividends}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>6.</strong> Foreign dividends (up to £1,000)</span>} name="foreignDividends">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, foreignDividends: e.target.value })}
                            value={formValues?.foreignDividends}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Form.Item label={<span><strong>7.</strong> Tax taken off foreign dividends</span>} name="taxTakenOffForeignDividends">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxTakenOffForeignDividends: e.target.value })}
                            value={formValues?.taxTakenOffForeignDividends}
                        />
                    </Form.Item>
                </Col>
            </Row>

            {/* Section 2: UK pensions, annuities and other state benefits received */}
            <h2>UK pensions, annuities and other state benefits received</h2>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>8.</strong> Annual State Pension</span>} name="annualStatePension">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, annualStatePension: e.target.value })}
                            value={formValues?.annualStatePension}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>9.</strong> State Pension lump sum</span>} name="statePensionLumpSum">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, statePensionLumpSum: e.target.value })}
                            value={formValues?.statePensionLumpSum}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>10.</strong> Tax taken off box 9</span>} name="taxTakenOffBox9">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxTakenOffBox9: e.target.value })}
                            value={formValues?.taxTakenOffBox9}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>11.</strong> Other non-State Pensions</span>} name="otherNonStatePensions">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, otherNonStatePensions: e.target.value })}
                            value={formValues?.otherNonStatePensions}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>12.</strong> Tax taken off box 11</span>} name="taxTakenOffBox11">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxTakenOffBox11: e.target.value })}
                            value={formValues?.taxTakenOffBox11}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>13.</strong> Taxable Incapacity Benefit</span>} name="taxableIncapacityBenefit">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxableIncapacityBenefit: e.target.value })}
                            value={formValues?.taxableIncapacityBenefit}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Form.Item label={<span><strong>14.</strong> Tax taken off Incapacity Benefit in box 13</span>} name="taxTakenOffIncapacityBenefitBox13">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxTakenOffIncapacityBenefitBox13: e.target.value })}
                            value={formValues?.taxTakenOffIncapacityBenefitBox13}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>15.</strong> Jobseeker's Allowance</span>} name="jobSeekersAllowance">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, jobSeekersAllowance: e.target.value })}
                            value={formValues?.jobSeekersAllowance}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>16.</strong> Total of any other taxable State Pensions and benefits</span>} name="totalOtherTaxableBenefits">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, totalOtherTaxableBenefits: e.target.value })}
                            value={formValues?.totalOtherTaxableBenefits}
                        />
                    </Form.Item>
                </Col>
            </Row>

            {/* Section 3: Other UK income not included on supplementary pages */}
            <h2>Other UK income not included on supplementary pages</h2>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>17.</strong> Other taxable income</span>} name="otherTaxableIncome">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, otherTaxableIncome: e.target.value })}
                            value={formValues?.otherTaxableIncome}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>18.</strong> Total amount of allowable expenses</span>} name="totalAllowableExpenses">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, totalAllowableExpenses: e.target.value })}
                            value={formValues?.totalAllowableExpenses}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label={<span><strong>19.</strong> Any tax taken off box 17</span>} name="taxTakenOffBox17">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, taxTakenOffBox17: e.target.value })}
                            value={formValues?.taxTakenOffBox17}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}  style={{marginBottom:16}}>
                <Col span={8}>
                    <Form.Item label={<span><strong>20.</strong> Total of other taxable income</span>} name="totalOtherTaxableIncome">
                        <Input
                            onChange={(e) => setFormValues({ ...formValues, totalOtherTaxableIncome: e.target.value })}
                            value={formValues?.totalOtherTaxableIncome}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );

    return (
        <Form>
            {form}
            {showPopUp && (
                <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
                    <Rnd
                        style={style}
                        minWidth={"50%"}
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