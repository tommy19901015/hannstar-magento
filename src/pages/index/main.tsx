import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerSlider from "../../component/bannerSlider/main";
import MessageCenter from "../../component/messageCenter/main";
import PlatformEntry from "../../component/platformEntry/main";
import GraphicsLine from "../../component/graphicsLine/main";
import Graphics2 from "../../component/graphics2/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import { ColType } from "../../component/columns/interface";
import { Provider } from 'react-redux';
import "./css.module.scss";
import store from '../../store';
import { fetchDataRequest } from "../../store/action";


const Index: React.FC = () => {
	const colSetting1 = {
		type: ColType.TwoCol,
		widthL: 60,
		widthR: 40,
		contentL: <MessageCenter />,
		contentR: <PlatformEntry />,
	};

	const colSetting2 = {
		type: ColType.FullPage,
		content: <Graphics2 />,
	};

	const colSetting3 = {
		type: ColType.FullPage,
		content: <GraphicsLine />,
	};
	const colSetting4 = {
		type: ColType.FullPage,
		content: <GraphicsLine {...{ type: "reverse" }} />,
	};

	const colSetting5 = {
		type: ColType.FullPage,
		content: <GraphicsLine />,
	};

	const collapseLiData = [
		{
			title: "<h1>h1h1h1h1h1h1h11h</h1>",
			content: [
				'<div>111111<div>', '<div>2222222222222<div>', '<div>33333333<div>'
			]
		},
		{
			title: "<h1>h1h1h1h1h1h1h11h</h1>",
			content: [
				'<div>111111<div>', '<div>2222222222222<div>', '<div>33333333<div>'
			]
		},
		{
			title: "<h1>h1h1h1h1h1h1h11h</h1>",
			content: [
				'<div>111111<div>', '<div>2222222222222<div>', '<div>33333333<div>'
			]
		},
	]
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDataRequest());
	  }, []);

     // 拿 store 資料 
	  const selectedData = useSelector((state) => state)


	return (
		<Layout >
			<BannerSlider />
			<Columns {...colSetting1} />
			<Columns {...colSetting2} />
			<Columns {...colSetting3} />
			<Columns {...colSetting4} />
			<Columns {...colSetting5} />
		</Layout>
	);
};

const AppWrapper = () => {
	return (
	  <Provider store={store}> // Set context
		<Index /> 
	  </Provider>
	)
  }

export default AppWrapper;
