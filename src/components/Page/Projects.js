import React from 'react';
import Project from '../Project';

const Projects = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 lg:py-20 text-gray-700">
			<div className="text-base leading-loose xl:max-w-4xl xl:mx-auto">
				<p className="text-lg">
					A few highlights of my open-source projects. View them all{' '}
					<a
						href="https://github.com/shamimmoeen?tab=repositories"
						target={'_blank'}
						rel={'noreferrer'}
						className="text-link"
					>
						on GitHub
					</a>
					.
				</p>

				<div className="mt-10">
					<Project
						title={'Advanced WP Table'}
						githubUrl={''}
						wpPluginDirectoryUrl={'https://wordpress.org/plugins/advanced-wp-table/'}
					>
						Advanced WP Table, an easy to use plugin to create tables in WordPress. You can show the tables
						in posts, pages, widgets by using the shortcode.
					</Project>

					<Project
						title={'WC Ajax Product Filter'}
						githubUrl={'https://github.com/shamimmoeen/wc-ajax-product-filter'}
						wpPluginDirectoryUrl={'https://wordpress.org/plugins/wc-ajax-product-filter/'}
					>
						WooCommerce Ajax Product Filter – is a plugin that allows you to filter your products easily by
						categories, attributes, prices. Your can sort products, navigate to next and previous pages
						without reloading the page.
					</Project>

					<Project
						title={'WC Products Quick View'}
						githubUrl={'https://github.com/shamimmoeen/wc-products-quick-view'}
						wpPluginDirectoryUrl={'https://wordpress.org/plugins/wc-products-quick-view/'}
					>
						WC Products Quick View plugin comes for giving your shop an exclusive feature. This plugin adds
						a “Quick View” button to the products loop.
					</Project>
				</div>
			</div>
		</div>
	);
};

export default Projects;
