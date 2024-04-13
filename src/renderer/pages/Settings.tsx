import classNames from 'classnames';
import {useState} from "react";
import Nav from '../components/Nav';
import { toggleDarkMode } from '../lib/utils';

export default function Settings() {
    const [darkModeStatus, setDarkModeStatus] = useState(document.documentElement.getAttribute('data-bs-theme') === 'dark');

    return (
        <>
            <Nav title='تنظیمات' />
            <div className={classNames(
                "myApp",
                "normalPage"
            )}>
                <div className="settings">
                    <div className="item">
                        <label className="key">
                            اندپوینت
                        </label>
                        <div className="value">
                            <span className="dirLeft">engage.cloudflareclient.com</span>
                        </div>
                        <div className="info">
                            ترکیبی از IP یا نام دامنه، به‌همراه پورت
                        </div>
                    </div>
                    <div className="item">
                        <label className="key">
                            پورت تونل
                        </label>
                        <div className="value">
                            <span className="dirLeft">8086</span>
                        </div>
                        <div className="info">
                            تعیین پورت تونل برنامه
                        </div>
                    </div>
                    <div className="item">
                        <label className="key">
                            سایفون
                        </label>
                        <div className="value">
                            <div
                                className={classNames(
                                    "checkbox",
                                )}
                            >
                                <i className="material-icons">&#xe876;</i>
                            </div>
                        </div>
                        <div className="info">
                            فعالسازی سایفون
                        </div>
                    </div>
                    <div className="item">
                        <label className="key">
                            انتخاب کشور
                        </label>
                        <div className="value">
                            <select>
                                <option value="">Automatic</option>
                                <option value="ES">Spain</option>
                                <option value="AT">Austria</option>
                            </select>
                        </div>
                        <div className="info">
                            انتخاب آی‌پی کشور موردنظر
                        </div>
                    </div>
                    <div className="item">
                        <label className="key">
                            لایسنس
                        </label>
                        <div className="value">
                            <span className="dirLeft">XXXX-XXXX</span>
                        </div>
                        <div className="info">
                            اگر لایسنس دارید (هر لایسنس 2x می‌شود)
                        </div>
                    </div>
                    <div className="item">
                        <label className="key">
                            گول
                        </label>
                        <div className="value">
                            <div
                                className={classNames(
                                    "checkbox",
                                )}
                            >
                                <i className="material-icons">&#xe876;</i>
                            </div>
                        </div>
                        <div className="info">
                            فعالسازی Warp In Warp
                        </div>
                    </div>
                    <div className="item">
                        <label className="key" htmlFor="flexSwitchCheckChecked">
                            حالت تیره
                        </label>
                        <div className="value">
                            <div
                                className={classNames(
                                    "checkbox",
                                    (darkModeStatus ? "checked" : ""),
                                )}
                                 onClick={() => {
                                     toggleDarkMode();
                                     setDarkModeStatus(!darkModeStatus);
                                 }}
                            >
                                <i className="material-icons">&#xe876;</i>
                            </div>
                        </div>
                        <div className="info" id="flexSwitchCheckChecked">مشخص‌کردن حالت نمایش برنامه</div>
                    </div>
                </div>
            </div>
        </>
    );
}