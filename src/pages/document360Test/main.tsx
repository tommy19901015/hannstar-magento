import React, { Children, useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../component/breadcrumbs/main";
import Layout from "../../component/layout/main";
import Columns from "../../component/columns/main";
import parse from 'html-react-parser';
import CollapseLi from "../../component/collapseLi/main";
import "./css.scss";

const htmlTestData = `<div classname="hannstarTableRWD" style="border: 1px solid #000;">

	<table style="width: 100%;">
		<tbody>
			<tr>
				<td style="width: 50.0000%;"><span style='color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;'>總經理</span>
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">香港城市大學管理學博士、上海復旦大學管理學博士班結業</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">華新麗華(股)公司董事/總經理、華邦電子(股)公司監察人、和鑫光電(股)公司董事長、瀚宇博德(股)公司董事</li>
					</ul>
					<br>
				</td>
			</tr>
			<tr>
				<td style="width: 50.0000%;">副總經理
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">清華大學化學工程所碩士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶(股)公司Cell 副廠長、產品開發處處長、產品開發中心資深處長及協理</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">和鑫光電(股)公司總經理、元太科技工業(股)公司製程課長</li>
					</ul>
					<br>
				</td>
			</tr>
			<tr>
				<td style="width: 50.0000%;">副總經理
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">日本九州大學材料開發所博士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">奇美電子(股)公司資深廠長、群創光電(股)公司資深廠長</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">茂迪(股)公司總廠長、茂迪/新能源(股)公司總經理</li>
					</ul>
					<br>
				</td>
			</tr>
			<tr>
				<td style="width: 50.0000%;">

					<p>副總經理</p>

					<p>會計主管、財務主管</p>
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">交通大學管理學院經營管理研究所碩士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">台灣大學法律學院科際整合法律學研究所碩士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">美商新蛋科技亞洲區財務總監</li>
					</ul>
					<br>
				</td>
			</tr>
			<tr>
				<td style="width: 50.0000%;">

					<p>副總經理</p>

					<p>公司治理主管</p>
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">Whittier Law School 博士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">New York University 碩士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">常在法律事務所/Heller Ehrman LLP/Dewey ＆ LeBoeuf律師、群創光電(股)公司處長</li>
					</ul>
					<br>
				</td>
			</tr>
			<tr>
				<td style="width: 50.0000%;">協理
					<br>
				</td>
				<td style="width: 50.0000%;">

					<ul style='text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">中正大學化學工程所碩士</li>
						<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶(股)公司面板暨觸控行銷業務中心處長</li>
					</ul>
					<br>
				</td>
			</tr>
		</tbody>
	</table>
	<br>
	<br>
	<br>
</div>

<ul class="templateList" style='text-size-adjust: none; box-sizing: border-box; margin: 0px 0px 50px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: none; color: rgb(93, 93, 93); font-family: "Noto Sans TC", "Noto Sans SC", "Noto Sans", 微軟正黑體, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>
	<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
		<div class="itemAllType itemOnlyText itemWrap" style="text-size-adjust: none; box-sizing: border-box; margin: 0px auto; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; position: relative; z-index: 1; display: flex; max-width: 1480px;">
			<div class="Txt" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 80px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; width: 1480px;">
				<div class="textBox" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">

					<h2 class="center" style="text-size-adjust: none; box-sizing: border-box; margin: 0px 0px 30px; padding: 0px; border: 0px; outline: 0px; font-size: 32px; vertical-align: baseline; background: transparent; display: flex; font-weight: 500; letter-spacing: 1px; -webkit-box-pack: center; justify-content: center; color: rgb(6, 6, 6);">企業組織架構</h2>
					<div class="textEditor clearfix" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; clear: both; color: rgb(93, 93, 93); line-height: 1.8;">
						<div style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; text-align: center;">卓越的製程技術，穩定的良率，創造無數精彩旅程
							<br style="text-size-adjust: none; box-sizing: border-box;">
							<br style="text-size-adjust: none; box-sizing: border-box;"><img alt="" src="https://webdev.hannstar.com/upload/page_about_template_b/twL_page_about_template_21L13_nfu7zwsper.jpg" style="text-size-adjust: none; box-sizing: border-box; padding: 0px; border: 0px; outline: 0px; font-size: 16px; background: transparent; max-width: 100%;" class="fr-fic fr-dii"><img alt="" src="https://webdev.hannstar.com/upload/page_about_template_b/ALL_page_about_template_21L08_5tpcvr5adr.jpg" style="text-size-adjust: none; box-sizing: border-box; padding: 0px; border: 0px; outline: 0px; font-size: 16px; background: transparent; max-width: 100%;" class="fr-fic fr-dii">
							<br style="text-size-adjust: none; box-sizing: border-box;">&nbsp;

							<table border="1" cellpadding="1" cellspacing="1" class="fullTable" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 1px solid transparent; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; border-collapse: collapse; width: 1480px;">
								<thead style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px 5px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center;">職稱</th>
										<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px 5px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 0px 50% / 1px 20px no-repeat rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center;">姓名</th>
										<th scope="col" style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px 5px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 0px 50% / 1px 20px no-repeat rgb(0, 148, 218); font-weight: 500; color: rgb(255, 255, 255); text-align: center;">主要經(學)歷</th>
									</tr>
								</thead>
								<tbody style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">總經理</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">焦佑麒</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent; text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">香港城市大學管理學博士、上海復旦大學管理學博士班結業</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">華新麗華(股)公司董事/總經理、華邦電子(股)公司監察人、和鑫光電(股)公司董事長、瀚宇博德(股)公司董事</li>
											</ul>
										</td>
									</tr>
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">副總經理</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">吳許合</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242); text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">清華大學化學工程所碩士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶(股)公司Cell 副廠長、產品開發處處長、產品開發中心資深處長及協理</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">和鑫光電(股)公司總經理、元太科技工業(股)公司製程課長</li>
											</ul>
										</td>
									</tr>
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">副總經理</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">林清標</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent; text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">日本九州大學材料開發所博士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">奇美電子(股)公司資深廠長、群創光電(股)公司資深廠長</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">茂迪(股)公司總廠長、茂迪/新能源(股)公司總經理</li>
											</ul>
										</td>
									</tr>
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">副總經理
											<br style="text-size-adjust: none; box-sizing: border-box;">會計主管、財務主管</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">林忠翰</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242); text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">交通大學管理學院經營管理研究所碩士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">台灣大學法律學院科際整合法律學研究所碩士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">美商新蛋科技亞洲區財務總監</li>
											</ul>
										</td>
									</tr>
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">副總經理
											<br style="text-size-adjust: none; box-sizing: border-box;">公司治理主管</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent;">邱博興</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: transparent; text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">Whittier Law School 博士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">New York University 碩士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">常在法律事務所/Heller Ehrman LLP/Dewey ＆ LeBoeuf律師、群創光電(股)公司處長</li>
											</ul>
										</td>
									</tr>
									<tr style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">協理</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242);">林文奇</td>
										<td style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 15px; border: 1px solid rgb(232, 232, 232); outline: 0px; font-size: 16px; vertical-align: middle; background: rgb(242, 242, 242); text-align: left;">

											<ul style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px 0px 0px 30px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent; list-style: outside disc;">
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">中正大學化學工程所碩士</li>
												<li style="text-size-adjust: none; box-sizing: border-box; margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 16px; vertical-align: baseline; background: transparent;">瀚宇彩晶(股)公司面板暨觸控行銷業務中心處長</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div></div></div></div></div>
	</li>
</ul>
`.replace("classname", 'class');

const Document360Test: React.FC = () => {
	const getRWDTable = () => {
		const div: any = document.createElement('div');
		div.innerHTML = htmlTestData.trim();
		const table: any = div.getElementsByClassName('hannstarTableRWD')
		const trLlist: any = table[0].getElementsByTagName("tr")
		const trLlistArray = [...trLlist]
		const rwdData = trLlistArray.map((tr: any, idx: any) => {
			const td = tr.getElementsByTagName("td")
			const tdArray = [...td]
			return { title: tdArray[0].innerText, content: [tdArray[1].innerText] }
		})
		return <CollapseLi data={rwdData} />
	};


	return (
		<Layout>
			<div className="testHtml" dangerouslySetInnerHTML={{ __html: htmlTestData }} />
			<div className="testTableRWD">
				{getRWDTable()}
			</div>
		</Layout>
	);
};

export default Document360Test;
