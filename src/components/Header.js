import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { Popover, Transition } from '@headlessui/react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import Github from './Social_Icon/Github';
import Linkedin from './Social_Icon/Linkedin';
import DarkModeSwitch from './DarkModeSwitch';
import string_to_slug from '../utils/slugify';

const menuItems = ['About Me', 'Services', 'Resume', 'Projects', 'Contact'];

const Header = () => {
	const getLinkTo = (route) => {
		return string_to_slug(route);
	};

	return (
		<>
			<Popover className="relative bg-white border-b-2 border-gray-100">
				{({ open }) => (
					<>
						<div className={'max-w-7xl mx-auto px-6 md:px-4'}>
							<div className={'flex justify-between items-center py-4 2xl:py-6'}>
								<div className={'justify-start flex-1'}>
									<Avatar size={40} />
								</div>
								<div className="flex md:hidden mr-3">
									<DarkModeSwitch />
								</div>
								<div className={'md:hidden -mr-2 -my-2'}>
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open Menu</span>
										<MenuIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
								<div className={'hidden md:flex flex-auto justify-center'}>
									{menuItems.map((item) => (
										<NavLink
											className="text-xl inline-flex items-center font-medium text-gray-500 hover:text-gray-700 mx-3"
											activeClassName="!text-indigo-500"
											key={item}
											to={'/' + getLinkTo(item)}
										>
											{item}
										</NavLink>
									))}
								</div>
								<div className={'hidden md:flex flex-1 justify-end items-center'}>
									<Github classes={'p-1 mx-1 text-[#333]'} />
									<Linkedin classes={'p-1 mx-1 text-[#0a66c2]'} />

									<div className="flex ml-4">
										<DarkModeSwitch />
									</div>
								</div>
							</div>
						</div>
						<Transition
							show={open}
							as={Fragment}
							enter="duration-200 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								focus
								className="absolute inset-0 z-10 p-2 transition transform origin-top-right md:hidden"
							>
								<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
									<div className="pt-5 pb-6 px-5">
										<div className="flex">
											<div className="flex-1">
												<Avatar size={32} onlyImage={true} />
											</div>
											<div className="-mr-2">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
													<span className="sr-only">Close menu</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
										<div className="grid grid-cols-1 gap-3 my-5">
											{menuItems.map((item) => (
												<div className="self-start">
													<NavLink
														className="text-xl text-gray-500 font-medium hover:text-gray-700"
														activeClassName="!text-indigo-500"
														key={item}
														to={'/' + getLinkTo(item)}
													>
														{item}
													</NavLink>
												</div>
											))}
										</div>
										<h4 className="uppercase text-gray-500 text-lg font-semibold mb-2">
											Get in touch
										</h4>
										<div className="flex">
											<Github classes="text-[#333]" />
											<Linkedin classes="text-[#0a66c2] ml-2" />
										</div>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</>
	);
};

export default Header;
