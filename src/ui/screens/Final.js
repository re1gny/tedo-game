import {useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import styled from "@emotion/styled";
import { FTClient } from 'ft-client';
import {useSizeRatio} from "../../hooks/useSizeRatio";
import PanelBackImage from "../../assets/images/final/panelBack.png";
import BackImage from "../../assets/images/final/back.png";
import {scalePx} from "../../utils/scalePx";
import {Text} from "../shared/Text";
import {Button} from "../shared/Button";
import {Panel} from "../shared/Panel";
import {TransparentPanel} from "../shared/TransparentPanel";
import {Input} from "../shared/Input";
import {Checkbox} from "../shared/Checkbox";
import {reachMetrikaGoal} from "../../utils/reachMetrikaGoal";

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${({sizeRatio}) => scalePx(30, sizeRatio)};
    background-image: url(${BackImage});
    background-size: 100% 100%;
    background-color: #000F9B;
`;

const PanelStyled = styled(Panel)`
    background-image: ${({background}) => `url(${background})`};
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: ${({sizeRatio}) => scalePx(20, sizeRatio)};
`;

const PanelTextStyled = styled(Text)`
    text-align: center;
    margin-top: ${({sizeRatio}) => scalePx(25, sizeRatio)};
`;

const TransparentPanelStyled = styled(TransparentPanel)`
    padding: ${({sizeRatio}) => `${scalePx(23, sizeRatio)} ${scalePx(20, sizeRatio)} ${scalePx(25, sizeRatio)}`};
`;

const TransparentPanelTextStyled = styled(Text)`
    text-align: center;
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
`;

const InputStyled = styled(Input)`
    width: 100%;
`;

const CheckboxStyled = styled(Checkbox)`
    width: 100%;
    margin-top: ${({sizeRatio}) => scalePx(13, sizeRatio)};
`;

const LinkStyled = styled.a`
    color: inherit;
    text-decoration: underline;
`;

const ButtonStyled = styled(Button)`
    margin-top: ${({sizeRatio}) => scalePx(15, sizeRatio)};
`;

const ButtonTextStyled = styled(motion.span)``;

const CheckIconStyled = styled(motion.svg)`
    width: ${({sizeRatio}) => scalePx(22, sizeRatio)};
    height: ${({sizeRatio}) => scalePx(24, sizeRatio)};
`;

const ftClient = new FTClient('https://games-admin.fut.ru/api/', 'tedo-lighthouse')

export function Final() {
    const sizeRatio = useSizeRatio();
    const [email, setEmail] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [isAgreedError, setIsAgreedError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isTakingPart, setIsTakingPart] = useState(false);
    const isAgreedErrorTimerRef = useRef(null)
    const isEmailErrorTimerRef = useRef(null)

    const handleGo = () => {
        reachMetrikaGoal("web");
        window.open('https://t.me/tedo_career', '_blank');
    };

    const handleEmailChange = (value) => {
        if (isTakingPart) {
            return;
        }

        clearTimeout(isEmailErrorTimerRef.current)
        setIsEmailError(false)
        setEmail(value)
    };

    const handleIsAgreedChange = (value) => {
        if (isTakingPart) {
            return;
        }

        clearTimeout(isAgreedErrorTimerRef.current)
        setIsAgreedError(false)
        setIsAgreed(value)
    };

    const handleTakePart = (event) => {
        event.preventDefault();

        if (isTakingPart) {
            return;
        }

        if (!email) {
            clearTimeout(isEmailErrorTimerRef.current)
            setIsEmailError(true);
            isEmailErrorTimerRef.current = setTimeout(() => setIsEmailError(false), 1000);
        }

        if (!isAgreed) {
            clearTimeout(isAgreedErrorTimerRef.current)
            setIsAgreedError(true);
            isAgreedErrorTimerRef.current = setTimeout(() => setIsAgreedError(false), 1000);
        }

        if (email && isAgreed) {
            reachMetrikaGoal("mail");
            ftClient.createRecord({ email });
            setIsTakingPart(true);
        }
    };

    return (
        <Wrapper
            sizeRatio={sizeRatio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <PanelStyled sizeRatio={sizeRatio} background={PanelBackImage}>
                <TransparentPanelStyled sizeRatio={sizeRatio}>
                    <TransparentPanelTextStyled sizeRatio={sizeRatio} bold>
                        Ты справился с ролью хранителя маяка — теперь он снова освещает путь нашим клиентам!
                    </TransparentPanelTextStyled>
                </TransparentPanelStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    Оставляй почту и участвуй в розыгрыше — команда ТеДо приготовила для тебя крутые призы.
                </PanelTextStyled>
                <FormStyled sizeRatio={sizeRatio} onSubmit={handleTakePart}>
                    <InputStyled
                        sizeRatio={sizeRatio}
                        value={email}
                        error={isEmailError}
                        placeholder="example@email.com"
                        readOnly={isTakingPart}
                        onChange={handleEmailChange}
                    />
                    <CheckboxStyled
                        sizeRatio={sizeRatio}
                        value={isAgreed}
                        error={isAgreedError}
                        label={<>Я согласен(а) на <LinkStyled href="https://doc.fut.ru/personal_data_policy.pdf" target="_blank">обработку персональных данных</LinkStyled> и получение информационных сообщений, а также с <LinkStyled href="https://disk.yandex.com/i/yK3qJgig9hQH0g" target="_blank">правилами проведения акции</LinkStyled>.</>}
                        readOnly={isTakingPart}
                        onChange={handleIsAgreedChange}
                    />
                    <ButtonStyled sizeRatio={sizeRatio} type="submit" disabled={isTakingPart}>
                        <AnimatePresence initial={false} mode="wait">
                            {isTakingPart ? (
                                <CheckIconStyled
                                    key="taking-part"
                                    viewBox="0 0 22 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    sizeRatio={sizeRatio}
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.8}}
                                >
                                    <path
                                        d="M2.75 15L11.25 22L19.25 2"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </CheckIconStyled>
                            ) : (
                                <ButtonTextStyled
                                    key="not-taking-part"
                                    sizeRatio={sizeRatio}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Участвовать
                                </ButtonTextStyled>
                            )}
                        </AnimatePresence>
                    </ButtonStyled>
                </FormStyled>
                <PanelTextStyled sizeRatio={sizeRatio}>
                    За время миссии тебе удалось раскрыть <Text bold inline>самый важный секрет</Text> для построения
                    успешной карьеры — развитие профессиональных, личностных и лидерских навыков. А развить их можно у нас! <Text bold inline>Начни в карьеру в ТеДо</Text> и заложи надежный фундамент для успешной карьеры.
                </PanelTextStyled>
                <ButtonStyled sizeRatio={sizeRatio} onClick={handleGo}>
                    <ButtonTextStyled sizeRatio={sizeRatio}>Скорее в ТеДо!</ButtonTextStyled>
                </ButtonStyled>
            </PanelStyled>
        </Wrapper>
    )
}
