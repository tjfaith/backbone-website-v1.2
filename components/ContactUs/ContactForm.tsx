'use client'
import { Input, Textarea } from '@heroui/input'
import React from 'react'
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import useContactUs from './useContactUs';
import { Icon } from '@iconify/react';
import { E164Number } from '@/types';
import { Button } from '@heroui/button';
import { CustomButton } from '@/components';
import { Link } from '@heroui/link';

const ContactForm = () => {
    const { handleSubmit, setMessageData, loading, messageData } = useContactUs()
    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-background rounded-xl md:p-8 p-4 xl:max-w-xl max-w-3xl border border-foreground-100" data-aos="fade-up">
            <div className=" mb-8">
                <Input
                    validationBehavior="native"
                    isRequired={true}
                    placeholder="Fill in your email address"
                    label="Email Address"
                    labelPlacement="outside"
                    type="email"
                    variant="bordered"
                    radius="md"
                    value={messageData.email}
                    onValueChange={(value: string) =>
                        setMessageData((prev) => ({
                            ...prev,
                            email: value,
                        }))
                    }
                    classNames={{
                        base: 'mb-4',
                        input: "text-base",
                        label: 'font-medium !text-primary text-sm',
                        inputWrapper:
                            "bg-transparent shadow-none focus:bg-transparent ",
                    }}
                />

                <div className='grid xl:grid-cols-2 grid-cols-1 gap-4 mb-10'>
                    <Input
                        validationBehavior="native"
                        isRequired={true}
                        placeholder="Fill in your full name"
                        label="Your Name"
                        labelPlacement="outside"
                        variant="bordered"
                        radius="md"
                        value={messageData.name}
                        onValueChange={(value: string) =>
                            setMessageData((prev) => ({
                                ...prev,
                                name: value,
                            }))
                        }
                        classNames={{
                            input: "text-base",
                            label: 'font-medium !text-primary text-sm',
                            inputWrapper:
                                "bg-transparent shadow-none focus:bg-transparent ",
                        }}
                    />

                    <div className=" flex-grow md:w-auto w-full ">
                        <div
                            className={`font-medium text-primary mb-2 text-sm`}
                        >
                            <span>Phone number (Optional)</span>
                        </div>
                        <PhoneInput
                            flags={flags}
                            countryCallingCodeEditable={false}
                            defaultCountry="NG"
                            international={true}
                            limitMaxLength={true}
                            containerComponentProps={{
                                className: `flex pl-3 border-2  rounded-lg box-border w-full  shadow-xs text-sm border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] shadow-sm rounded-xl`,
                            }}
                            numberInputProps={{
                                className: `w-xs bg-transparent border-l p-2 border-gray-200 dark:border-background-500 dark:hover:border-[#5E5F68] hover:border-[#A1A1AA] focus:outline-none`,
                            }}
                            countrySelectProps={{
                                className: " rounded-lg",
                            }}
                            rules={{ required: true }}
                            value={messageData.phoneNumber}
                            onChange={(value: E164Number | undefined) =>
                                setMessageData((prev) => ({
                                    ...prev,
                                    phoneNumber: value,
                                }))
                            }

                        />
                    </div>

                </div>
                <Input
                    validationBehavior="native"
                    isRequired={true}
                    placeholder="What is your inquiry about?"
                    label="Subject"
                    labelPlacement="outside"
                    variant="bordered"
                    radius="md"
                    value={messageData.subject}
                    onValueChange={(value: string) =>
                        setMessageData((prev) => ({
                            ...prev,
                            subject: value,
                        }))
                    }
                    classNames={{
                        base: 'mb-4',
                        input: "text-base",
                        label: 'font-medium !text-primary text-sm',
                        inputWrapper:
                            "bg-transparent shadow-none focus:bg-transparent ",
                    }}
                />

                <Textarea
                    isRequired={true}
                    label="How can we help?"
                    placeholder="Write your message here"
                    value={messageData.message}
                    onValueChange={(value: string) =>
                        setMessageData((prev) => ({
                            ...prev,
                            message: value,
                        }))
                    }
                    classNames={{
                        input: "text-base",
                        label: 'font-medium !text-primary text-sm',
                    }}
                    variant="bordered"
                    radius="md"
                    labelPlacement="outside"
                />
            </div>
            <CustomButton
                type="submit"
                isLoading={loading}
                fullWidth
            >
                Get Started
            </CustomButton>
            <div className='text-xs text-primary text-center'>By submitting this, I confirm that I have read and understood the <Link className='text-xs font-medium' href="/privacy"> Privacy policy</Link></div>
        </form>
    )
}

export default ContactForm