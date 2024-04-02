'use client'
import { NextPage } from 'next'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon, GlobeAmericasIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import { Fragment, useRef } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

function validatePassord(password: string) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
  return passwordRegex.test(password)
}

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [termsAndCondition, setTermsAndCondition] = useState<boolean>(false)
  const [usefulTipsCheck, setUsefulTipsCheck] = useState<string>("no")
  const [tailorCheck, setTailorCheck] = useState<string>("no")
  const [thirdPartyCheck, setThirdPartyCheck] = useState<string>("no")
  const passwordEleRef = useRef(null)

  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [tacError, setTacError] = useState<string>('')

  const [showingPassword, setShowingPassword] = useState<boolean>(false)
  const [showingMoreOptions, setShowingMoreOptions] = useState<boolean>(false)

  const [elementsDisabled, setElementsDisabled] = useState<boolean>(false)
  const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false)

  const validateForm = () => {
    setEmailError("")
    setPasswordError("")
    setTacError("")

    let formHasErrors = 0;
    if (!email) {
      setEmailError("This field cannot be left blank")
      formHasErrors++
    } else {
      const isValidEmail = validateEmail(email)
      if (!isValidEmail) {
        setEmailError("Enter a valid email address")
        formHasErrors++
      }
    }
    if (!password) {
      setPasswordError("This field cannot be left blank")
      formHasErrors++
    } else {
      const isValidPassword = validatePassord(password)
      if (!isValidPassword) {
        setPasswordError("Use 8 or more characters with a mix of letters, numbers and symbols")
        formHasErrors++
      }
    }
    if (!termsAndCondition) {
      setTacError("Please accept the terms and conditions to finish the signup")
      formHasErrors++
    }
    return {
      formHasErrors: Boolean(formHasErrors)
    }
  }

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsFormSubmit(true)
    setElementsDisabled(true)
    const { formHasErrors } = validateForm();

    if (formHasErrors) {
      setElementsDisabled(false)
      return
    }
    try {
      console.log(`Submit the form with following data`);
      console.log({
        email,
        password,
        termsAndCondition,
        usefulTipsCheck,
        tailorCheck,
        thirdPartyCheck
      })
    }  catch (error: any) {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorMessage)
    } finally {
      setIsFormSubmit(false)
      setElementsDisabled(false)
    }
  }

  return (
    <>
      <div className=" flex min-h-full flex-1 bg-[#191919] items-center lg:justify-end">
        <div className="relative hidden flex-1 lg:block justify-center w-full max-w-[600px]">
          <h1 className="text-white justify-center flex text-4xl text-center mb-8">Sign up <br/>and come on in</h1>
          <div className="max-w-[366px] mx-auto mb-16">
            <img
              className="inset-0"
              src="https://www.typeform.com/static/images/signup-page/product-sample@3x.webp"
              alt=""
              />
          </div>
          <p className="text-white justify-center flex">© Typeform</p>
        </div>
        <div className="min-h-screen flex flex-1 flex-col justify-center bg-white lg:rounded-l-[16px]  lg:max-w-[742px]">
          <div className="mx-auto w-full">
            <div className="flex justify-between mb-5 px-4 xl:px-4 pt-2">
              <Menu as="div" className="relative inline-block text-left text-sm">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-gray-900 ring-inset ring-0 ">
                    <div className="flex gap-1">
                      <GlobeAmericasIcon className='w-5'/>
                      <span>English</span>
                    </div>
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-600" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-w-[116px]">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                        )}
                        >
                        English
                        </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                        )}
                        >
                        Espanol
                        </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div className="flex items-center text-sm">
                <p className="text-[#3d3d3c]">Already have an account?</p>
                <button className="rounded-md bg-white px-4 pt-1 pb-2 text-xs font-normal text-[#3d3d3c] shadow-sm ring-1 ring-inset ring-gray-900 hover:bg-gray-50 ms-2">Login</button>
              </div>
            </div>
            <div className="px-4 pt-0 pb-12 sm:px-6 lg:flex-none lg:px-12 xl:px-24">
              <div>
                <a href="#" className="flex justify-center items-center min-h-[60px]">
                  <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none">
                      <path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd"></path>
                    </svg>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none">
                        <path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path>
                      </svg>
                    </span>
                  </div>
                </a>
                <h2 className="mt-3 text-2xl tracking-tight text-[#5e5e5e] text-center mxa-w-[420px] mx-auto">
                  Get better data with conversational forms, surveys, quizzes & more.
                </h2>
              </div>
              <div className="mt-10 max-w-[256px] mx-auto">
                <div>
                  <form method="POST" className="space-y-6" onSubmit={onSubmit} autoComplete={"off"}>
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                      Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          onChange={(event) => setEmail(event.target.value)}
                        disabled={elementsDisabled}
                        className={`block w-full rounded-[3px] border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#7f7f7f] hover:ring-[#c2c2c1] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#000] sm:text-md ${
                        elementsDisabled ? 'disabled:opacity-75' : null
                        }`}
                        placeholder="Email"
                        />
                        { isFormSubmit && emailError && (
                        <div className="flex text-red-600 items-center gap-2 mt-1">
                          <ExclamationCircleIcon width="24px"/>
                          <p className="error text-red-600 text-sm ">{emailError}</p>
                        </div>
                        ) }
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                      Password
                      </label>
                      <div className="mt-2">
                        <div className='relative'>
                          <input
                          id="password"
                          name="password"
                          type={showingPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          disabled={elementsDisabled}
                          onChange={(event) => setPassword(event.target.value.trim())}
                          className={`block w-full rounded-[3px] border-0 py-1.5 shadow-sm ring-1 ring-inset ring-[#7f7f7f] hover:ring-[#c2c2c1] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#000] sm:text-md pe-6 ${
                          elementsDisabled ? 'disabled:opacity-75' : null
                          }`}
                          placeholder="Password"
                          />
                          <div className="absolute w-4 h-5 right-1 top-3">
                            {
                            showingPassword ? 
                            <EyeSlashIcon className='text-gray-500' onClick={() =>
                            setShowingPassword(false)} /> : 
                            <EyeIcon className='text-gray-500' onClick={() =>
                            setShowingPassword(true)}/>
                            }
                          </div>
                        </div>
                        { isFormSubmit && passwordError && (
                        <div className="flex text-red-600 items-center gap-2 mt-1">
                          <ExclamationCircleIcon width="24px"/>
                          <p className="error text-red-600 text-sm ">{passwordError}</p>
                        </div>
                        ) }
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <input
                          id="tac"
                          name="tac"
                          type='checkbox'
                          checked={termsAndCondition}
                          onChange={() => setTermsAndCondition((state) => !state)}
                        className="mt-1 h-5 w-5 rounded border-gray-300 text-[#191919] focus:ring-[#191919]"
                        />
                        <label htmlFor="tac" className="ml-3 block text-sm leading-6 text-gray-700">
                        I agree to Typeform’s <a href="#" className="text-[#191919] underline">Terms of Service</a>, <a href="#">Privacy Policy</a> and <a href="#">Data Processing Agreement</a>.
                        </label>
                        { isFormSubmit && tacError && (
                        <div className="flex text-red-600 items-center gap-2 mt-1">
                          <ExclamationCircleIcon width="24px"/>
                          <p className="error text-red-600 text-sm ">{tacError}</p>
                        </div>
                        ) }
                      </div>
                    </div>
                    <div>
                      <div className='flex justify-between gap-5' onClick={() =>
                        setShowingMoreOptions((state) => !state)}>
                        <p className="text-sm mb-3">See options</p>
                        <div>
                          {
                          showingMoreOptions ? 
                          <ChevronUpIcon className="-mr-1 h-5 w-5 text-[#191919]" aria-hidden="true" />
                          : 
                          <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#191919]" aria-hidden="true" />
                          }
                        </div>
                      </div>
                      {/* Show Hide based on selection */}
                      {
                      showingMoreOptions && (
                      <div>
                        <div>
                          <p className="mb-3 text-sm">
                            Get useful tips, inspiration, and offers via e-communication.
                          </p>
                          <div className="flex items-center">
                            <div className="flex items-center me-6">
                              <input 
                              id="useful-tips-yes"
                              name="useful-tips-yes"
                              type="radio"
                              checked={usefulTipsCheck == "yes"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setUsefulTipsCheck("yes")}
                              />
                              <label htmlFor="useful-tips-yes" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input 
                              id="useful-tips-no"
                              name="useful-tips-no"
                              type="radio"
                              checked={usefulTipsCheck == "no"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setUsefulTipsCheck("no")}
                              />
                              <label htmlFor="useful-tips-no" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="mb-3 text-sm">
                            Tailor Typeform to my needs based on my activity.See Privacy Policy
                          </p>
                          <div className="flex items-center">
                            <div className="flex items-center me-6">
                              <input 
                              id="tailor-yes"
                              name="tailor-yes"
                              type="radio"
                              checked={tailorCheck == "yes"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setTailorCheck("yes")}
                              />
                              <label htmlFor="tailor-yes" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input 
                              id="tailor-no"
                              name="tailor-no"
                              type="radio"
                              checked={tailorCheck == "no"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setTailorCheck("no")}
                              />
                              <label htmlFor="tailor-no" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              No
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="mb-3 text-sm">
                            Enrich my data with select third parties for more relevant content.See Privacy Policy
                          </p>
                          <div className="flex items-center">
                            <div className="flex items-center me-6">
                              <input 
                              id="third-party-yes"
                              name="third-party-yes"
                              type="radio"
                              checked={thirdPartyCheck == "yes"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setThirdPartyCheck("yes")}
                              />
                              <label htmlFor="third-party-yes" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input 
                              id="third-party-no"
                              name="third-party-no"
                              type="radio"
                              checked={thirdPartyCheck == "no"} 
                              className="h-4 w-4 border-gray-300 text-black focus:ring-0"
                              onChange={() => setThirdPartyCheck("no")}
                              />
                              <label htmlFor="third-party-no" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                              No
                              </label>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-5">
                          You can update your preferences in your Profile at any time
                        </p>
                      </div>
                      )
                      }
                    </div>
                    <div>
                      <button
                      disabled={elementsDisabled}
                      type="submit"
                      className={`flex w-full justify-center rounded-md bg-[#191919] px-3 py-2 text-md font-normal text-white shadow-sm hover:bg-[#191919] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919] ${
                      elementsDisabled ? 'disabled:opacity-75 cursor-not-allowed' : null
                      }`}
                      >
                      Create my free account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
