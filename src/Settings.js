/* eslint-disable no-undef */
// import { useState } from 'react';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TabPanel, TextControl, RangeControl, __experimentalBoxControl as BoxControl, ToggleControl, SelectControl } from "@wordpress/components";

import { Background, BorderControl, BtnGroup } from "../../Components";
import { produce } from 'immer';

const mapAlignments = [
	{ label: __('left', 'fb-button'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'fb-button'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'fb-button'), value: 'right', icon: 'editor-alignright' }
];

const Settings = ({ attributes, setAttributes }) => {
	const { background, filters, hovFilters, padding, zoom, height, width, border, alignment, btnType, fbUrl, layout, clrScheme, size, shareOffOn, showFaces } = attributes;

	// console.log(btnType); 

	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") }
				]}>

				{(tab) => <>
					{tab.name === "general" && <PanelBody
						className="bPlPanelBody"
						title={__("Map", "fb-button")} 	>
						<TextControl
							className="mt20"
							label={__("FaceBook", "fb-button")}
							value={fbUrl}
							onChange={(val) => setAttributes({ fbUrl: val })}
						/>
						<ToggleControl
							className="mt20"
							label={__("Share Button", "map-block")}
							value={shareOffOn}
							checked={shareOffOn}
							onChange={(val) => setAttributes({ shareOffOn: val })}
						/>
						<ToggleControl
							className="mt20"
							label={__("Show Faces", "map-block")}
							value={showFaces}
							checked={showFaces}
							onChange={(val) => setAttributes({ showFaces: val })}
						/>
						<SelectControl
							className="mt20"
							label="Layout"
							value={layout}
							options={[
								{ label: 'Button', value: 'button' },
								{ label: 'standard', value: 'standard' },
								{ label: 'Box Count', value: 'box_count' },
								{ label: 'Button Count', value: 'button_count' },
							]}
							onChange={(val) => setAttributes({ layout: val })}
							isIcon={true} />
						<SelectControl
							className="mt20"
							label="Button Type"
							value={btnType}
							options={[
								{ label: "Like", value: "like" },
								{ label: "Recommend", value: "recommend" },
							]}
							onChange={(val) => setAttributes({ btnType: val })}
							isIcon={true} />
						<SelectControl
							className="mt20"
							label="Color Scheme"
							value={clrScheme}
							options={[
								{ label: 'Dark', value: 'dark' },
								{ label: 'Light', value: 'light' },
							]}
							onChange={(val) => setAttributes({ clrScheme: val })}
							isIcon={true} />
						<SelectControl
							className="mt20"
							label="Size"
							value={size}
							options={[
								{ label: 'Large', value: 'large' },
								{ label: 'Small', value: 'small' },
							]}
							onChange={(val) => setAttributes({ size: val })}
							isIcon={true} />
					</PanelBody>}


					{tab.name === "style" && <>
						<PanelBody
							className="bPlPanelBody"
							title={__("Button Control", "fb-button")}>

							<BtnGroup
								className="mt20"
								label={__("Alignment", "fb-button")}
								value={alignment}
								onChange={val => setAttributes({ alignment: val })}
								options={mapAlignments} isIcon={true} />

							<Background
								className='mt20 mb20'
								label={__('Background', 'fb-button')}
								value={background}
								onChange={(val) => setAttributes({ background: val })}
								defaults={{ color: '#000' }}
							/>

							<BoxControl
								label={__("Padding", "fb-button")}
								values={padding}
								resetValues={{
									"top": "0px",
									"right": "0px",
									"bottom": "0px",
									"left": "0px"
								}}
								onChange={(value) => setAttributes({ padding: value })}
							/>
						</PanelBody>
					</>}
				</>}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;