import { motion } from 'motion/react'
import ItemHover from '../../components/ItemHover'
import { useState } from 'react'

const WebsiteLinks = () => {
    const [emailText, setEmailText] = useState('Copy Email')

    const copyClipboard = () => {
        navigator.clipboard.writeText('jasonchanhw0531@gmail.com')
        setEmailText('Copied!')
        setTimeout(() => {
            setEmailText('Copy Email')
        }, 500)
    }

    return (
        <div className="flex gap-x-2 ">
            <ItemHover hoverText="Github">
                <a href="https://github.com/JC33340" target="_blank">
                    <motion.svg
                        viewBox="0 0 24 24"
                        className={'w-10'}
                        fill="none"
                    >
                        <motion.path
                            className="stroke-platinum"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1.1 }}
                            transition={{
                                pathLength: { duration: 4, ease: 'easeInOut' },
                            }}
                            d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
                        ></motion.path>
                    </motion.svg>
                </a>
            </ItemHover>
            <ItemHover hoverText="Linkedin">
                <a
                    href="https://www.linkedin.com/in/ho-wa-chan/"
                    target="_blank"
                >
                    <svg viewBox="0 0 24 24" className={'w-10'} fill="none">
                        <motion.path
                            d="M22 3.47059V20.5294C22 20.9194 21.845 21.2935 21.5692 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47056C3.08053 22 2.70648 21.8451 2.43069 21.5693C2.15491 21.2935 1.99997 20.9194 1.99997 20.5294V3.47059C1.99997 3.08056 2.15491 2.70651 2.43069 2.43073C2.70648 2.15494 3.08053 2 3.47056 2H20.5294C20.9194 2 21.2935 2.15494 21.5692 2.43073C21.845 2.70651 22 3.08056 22 3.47059V3.47059ZM7.88232 9.64706H4.94115V19.0588H7.88232V9.64706ZM8.14703 6.41176C8.14858 6.18929 8.10629 5.96869 8.02258 5.76255C7.93888 5.55642 7.81539 5.36879 7.65916 5.21039C7.50294 5.05198 7.31705 4.92589 7.1121 4.83933C6.90715 4.75277 6.68715 4.70742 6.46468 4.70588H6.41173C5.95931 4.70588 5.52541 4.88561 5.20549 5.20552C4.88558 5.52544 4.70585 5.95934 4.70585 6.41176C4.70585 6.86419 4.88558 7.29809 5.20549 7.61801C5.52541 7.93792 5.95931 8.11765 6.41173 8.11765V8.11765C6.63423 8.12312 6.85562 8.0847 7.06325 8.00458C7.27089 7.92447 7.46071 7.80422 7.62186 7.65072C7.78301 7.49722 7.91234 7.31346 8.00245 7.10996C8.09256 6.90646 8.14169 6.6872 8.14703 6.46471V6.41176ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7798 9.77345C13.2576 10.0397 12.8142 10.4383 12.4941 10.9294H12.4117V9.64706H9.64703V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.368 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                            className="stroke-platinum"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                pathLength: { duration: 5, ease: 'easeInOut' },
                            }}
                        ></motion.path>
                    </svg>
                </a>
            </ItemHover>
            <ItemHover hoverText={emailText} handleClick={copyClipboard}>
                <motion.svg viewBox="0 0 24 24" className={'w-10'} fill="none">
                    <motion.path
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                        className="stroke-platinum"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1.1 }}
                        transition={{
                            pathLength: { duration: 4, ease: 'easeInOut' },
                        }}
                    ></motion.path>
                    <motion.rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        className="stroke-platinum"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1.1 }}
                        transition={{
                            pathLength: { duration: 4, ease: 'easeInOut' },
                        }}
                    ></motion.rect>
                </motion.svg>
            </ItemHover>
        </div>
    )
}

export default WebsiteLinks
