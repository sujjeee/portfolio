import React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const people = [
    { name: 'All' },
    { name: 'Marketing' },
    { name: 'Blog' }
]

const Tab = ({ onTabClick }) => {
    const handleChange = (value) => {
        onTabClick(value);
    };
    const [selected, setSelected] = useState(people[0])
    // console.log('this is your selcted person', selected)
    return (
        <div className='max-w-screen-md px-4 md:px-8 mx-auto'>
            <div className="sm:hidden z-50">
                <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md text-white sm:text-sm">
                            <span className="block truncate">{selected.name}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <MdOutlineKeyboardArrowRight
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto z-50 rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person, personIdx) => (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-3 pr-4 ${active ? 'bg-gray-700 text-white' : 'text-white'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span onClick={() => handleChange(person.name)} className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                    {person.name}
                                                </span>

                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
                S
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full">
                    <button onClick={() => handleChange('All')} className="inline-block rounded-l-lg w-full p-4  hover:text-white bg-gray-800 hover:bg-gray-700" aria-current="page">All</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleChange('Marketing')} className="inline-block w-full p-4  hover:text-white bg-gray-800 hover:bg-gray-700">Marketing</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleChange('Blog')} className="inline-block w-full p-4  hover:text-white bg-gray-800 hover:bg-gray-700 rounded-r-lg" >Blog</button>
                </li>
            </ul>
        </div>
    )
}

export default Tab