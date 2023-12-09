/* eslint-disable no-undef */
// import { useState } from 'react';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TabPanel, TextControl, RangeControl, __experimentalUnitControl as UnitControl, __experimentalBoxControl as BoxControl, ToggleControl, SelectControl } from "@wordpress/components";

import { Background, BorderControl, BtnGroup } from "../../Components";
import { produce } from 'immer';

const mapAlignments = [
	{ label: __('left', 'fb-button'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'fb-button'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'fb-button'), value: 'right', icon: 'editor-alignright' }
];

const Settings = ({ attributes, setAttributes }) => {
	const { background, filters, hovFilters, padding, zoom, height, width, border, alignment, fbUrl, layout, clrScheme, size } = attributes;

	// console.log(scaleY);

	const updateObj = (attr, key, val, nestKey = false) => {
		const newObj = produce(attributes[attr], draft => {
			if (false !== nestKey) {
				draft[key][nestKey] = val;
			} else {
				draft[key] = val;
			}
		});
		setAttributes({ [attr]: newObj })
	}

	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") }
				]}
			>
				{(tab) => <>
					{tab.name === "general" && <PanelBody
						className="bPlPanelBody"
						title={__("Map", "fb-button")} 	>
						<TextControl
							label={__("FaceBook", "fb-button")}
							value={fbUrl}
							onChange={(val) => setAttributes({ fbUrl: val })}
						/>
						<SelectControl
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
							label="Color Scheme"
							value={clrScheme}
							options={[
								{ label: 'Dark', value: 'dark' },
								{ label: 'Light', value: 'light' },
							]}
							onChange={(val) => setAttributes({ clrScheme: val })}
							isIcon={true} />
						<SelectControl
							label="Size"
							value={size}
							options={[
								{ label: 'Large', value: 'large' },
								{ label: 'Small', value: 'small' },
							]}
							onChange={(val) => setAttributes({ size: val })}
							isIcon={true} />

						<RangeControl
							className="mt20"
							label={__("Zoom", "fb-button")}
							value={zoom}
							onChange={(val) => setAttributes({ zoom: val })}
							min={0}
							max={20}
							step={1}
						/>
					</PanelBody>}


					{tab.name === "style" && <>
						<PanelBody
							className="bPlPanelBody"
							title={__("Map", "fb-button")}>
							<UnitControl
								label={__("Width", "fb-button")}
								labelPosition="left"
								value={width}
								onChange={(val) => setAttributes({ width: val })}
							/>
							<UnitControl
								className='mt20'
								label={__("Height", "fb-button")}
								labelPosition="left"
								value={height}
								onChange={(val) => setAttributes({ height: val })}
							/>

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

							<BorderControl label={__('Border:', 'fb-button')}
								value={border} onChange={val => setAttributes({ border: val })}
								defaults={{ radius: '5px' }} />
						</PanelBody>


						<PanelBody className="bPlPanelBody" title={__("Filter", "fb-button")} initialOpen={false}>
							<TabPanel className="bPlTabPanel"
								tabs={[
									{ name: "normal", title: __("Normal") },
									{ name: "hover", title: __("Hover") },
								]} >

								{(tab) => <>
									{tab.name === "normal" && <PanelBody className="bPlPanelBody" >
										<RangeControl
											label={__("Blur", "fb-button")}
											value={filters.blur}
											onChange={(val) => updateObj('filters', 'blur', val)}
											min={0}
											max={10}
											step={0.1}
											allowReset={true}
											resetFallbackValue={0}
										/>
										<RangeControl
											label={__("Brightness", "fb-button")}
											value={filters.brightness}
											onChange={(val) => updateObj('filters', 'brightness', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Contrast", "fb-button")}
											value={filters.contrast}
											onChange={(val) => updateObj('filters', 'contrast', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Saturate", "fb-button")}
											value={filters.saturate}
											onChange={(val) => updateObj('filters', 'saturate', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Hue", "fb-button")}
											value={filters.hue}
											onChange={(val) => updateObj('filters', 'hue', val)}
											min={0}
											max={360}
											step={1}
											allowReset={true}
											resetFallbackValue={1}
										/>
									</PanelBody>}


									{tab.name === "hover" && <PanelBody className="bPlPanelBody">

										<RangeControl
											label={__("Blur", "fb-button")}
											value={hovFilters.blur}
											onChange={(val) => updateObj('hovFilters', 'blur', val)}
											min={0}
											max={10}
											step={0.1}
											allowReset={true}
											resetFallbackValue={0}
										/>

										<RangeControl
											label={__("Brightness", "fb-button")}
											value={hovFilters.brightness}
											onChange={(val) => updateObj('hovFilters', 'brightness', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={60}
										/>
										<RangeControl
											label={__("Contrast", "fb-button")}
											value={hovFilters.contrast}
											onChange={(val) => updateObj('hovFilters', 'contrast', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={150}
										/>
										<RangeControl
											label={__("Saturate", "fb-button")}
											value={hovFilters.saturate}
											onChange={(val) => updateObj('hovFilters', 'saturate', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={200}
										/>
										<RangeControl
											label={__("Hue", "fb-button")}
											value={hovFilters.hue}
											onChange={(val) => updateObj('hovFilters', 'hue', val)}
											min={0}
											max={360}
											step={1}
											allowReset={true}
											resetFallbackValue={10}
										/>
									</PanelBody>}
								</>}
							</TabPanel>
						</PanelBody>


					</>}
				</>}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;