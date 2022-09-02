import React, { Children, useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';

import "./css.scss";

const htmlTestData = `<table border="1" cellpadding="1" cellspacing="1" class="fullTable" style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 1px solid transparent; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; border-collapse: collapse; width: 1200px; box-shadow: rgba(0, 0, 16, 0.1) 0px 0px 5px; letter-spacing: 1px; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; orphans: 2; text-align: start; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
	<thead style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 14px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center; width: 150px;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">職稱</span></th>
			<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 14px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 0px 50% / 1px 20px no-repeat rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center; width: 200px;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">姓名</span></th>
			<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 14px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 0px 50% / 1px 20px no-repeat rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">目前兼任本公司及其他公司之職務</span></th>
		</tr>
	</thead>
	<tbody style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">董事長</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">焦佑麒</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶股份有限公司董事長及總經理；和鑫光電股份有限公司法人董事代表人及華俐投資股份有限公司法人董事長代表人；Bradford Ltd.、Hannspirit (BVI) Holding Ltd.、Brightpro Resources Limited and Hannspree International Holding Ltd.董事。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">董事</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">華新麗華(股)公司</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">華邦電子股份有限公司、華東科技股份有限公司、華新科技股份有限公司、瀚宇彩晶股份有限公司等董事。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">董事</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">馬維欣</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">和鑫光電股份有限公司董事長；金蘋果投資股份有限公司、白石股份有限公司、躍馬壹號股份有限公司法人董事長代表人；瀚宇彩晶股份有限公司、華新麗華股份有限公司及華邦電子股份有限公司董事。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">董事</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;">吳欣盈</td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">新光人壽保險股份有限公司副總經理</span>；<span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">新光人壽慈善基金會執行長</span>；<span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">新光醫療財團法人新光吳火獅紀念醫院董事</span>；<span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">新海瓦斯股份有限公司董事</span>；<span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">臺灣工商企業聯合會理事</span>；<span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">李光耀大學新光人才培訓專案總籌備規劃負責人。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">獨立董事</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">趙辛哲</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">台橡股份有限公司及豐達科技股份有限公司獨立董事。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">獨立董事</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247); text-align: center;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">孫璐筠</span></td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(247, 247, 247);"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">無。</span></td>
		</tr>
		<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;">獨立董事</td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255); text-align: center;">洪慶山</td>
			<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 13px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(255, 255, 255);">元大證券股份有限公司、元大商業銀行股份有限公司及群光電能股份有限公司獨立董事；星宇航空股份有限公司監察人；慶昇財務顧問有限公司董事長。</td>
		</tr>
	</tbody>
</table>

<p>
	<br>
</p>
<div class="hannstarTableRWD">

	<table style="width: 100%;">
		<tbody>
			<tr>
				<td style="width: 50.0000%;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">董事長</span>
					<br>
				</td>
				<td style="width: 50.0000%;"><span style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶股份有限公司董事長及總經理；和鑫光電股份有限公司法人董事代表人及華俐投資股份有限公司法人董事長代表人；Bradford Ltd.、Hannspirit (BVI) Holding Ltd.、Brightpro Resources Limited and Hannspree International Holding Ltd.董事。</span>瀚宇彩晶股份有限公司董事長及總經理；和鑫光電股份有限公司法人董事代表人及華俐投資股份有限公司法人董事長代表人；Bradford Ltd.、Hannspirit (BVI) Holding Ltd.、Brightpro Resources Limited and Hannspree International Holding Ltd.董事。
					<br>
				</td>
			</tr>
		</tbody>
	</table>
</div>
`

const Document360Test: React.FC = () => {
	const test = () => {
		// const yy = <div dangerouslySetInnerHTML={{ __html: htmlTestData }} />
		const yy = ReactHtmlParser(htmlTestData)
		console.log(yy);
		// const arrayChildren = Children.toArray(yy);
		// console.log('arrayChildrenarrayChildren', arrayChildren);
	}

	return (
		<Layout>
			<>
				{test()}
			</>

			<div dangerouslySetInnerHTML={{ __html: htmlTestData }} />
		</Layout>
	);
};

export default Document360Test;
