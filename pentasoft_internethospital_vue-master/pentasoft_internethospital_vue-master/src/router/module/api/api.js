// 首页
export const api = [{
	path: '/api',
	name: '_api',
	meta: {
		title: '独立功能配置',
		noKeepAlive: true,
		hideInMenu: true,
		hideInBread: true,
		noValidatePrivilege: false,
		icon: 'icon iconfont iconxitongshezhi'
	},
	children: [{
			path: '/api/part',
			name: 'Api',
			meta: {
				title: '独立功能配置或Api接口',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [
					// 单独配置的API接口权限，新增接口需要在处添加
					{
						title: '修改个人密码',
						name: 'employee-updatePwd'
					},
					{
						title: '文件上传',
						name: 'file-upload'
					},
					{
						title: '获取就诊人列表',
						name: 'get-patient-list'
					},
					{
						title: '获取就诊人填写项',
						name: 'get-patient-option-list'
					},
					{
						title: '就诊人创建提交',
						name: 'post-patient-data'
					},
					{
						title: '一键绑定患者健康卡',
						name: 'fast-bind-health-card'
					},
					{
						title: '用于健康卡的获取his患者',
						name: 'get-his-patient-for-health'
					},

					// 预约挂号相关接口
					{
						title: '科室列表',
						name: 'scheculing-op-area'
					},
					{
						title: '获取出诊科室列表',
						name: 'scheculing-op-dep'
					},
					{
						title: '科室预约',
						name: 'scheculing-op-doc'
					},
					{
						title: '预约科室列表',
						name: 'scheculing-op-index'
					},
					{
						title: '获取预约信息',
						name: 'scheculing-op-sch'
					},
					{
						title: '获取号源信息',
						name: 'scheculing-op-doc-num'
					},
					{
						title: '预约确认信息查询',
						name: 'scheculing-op-create-get'
					},
					{
						title: '预约确认提交',
						name: 'scheculing-op-create-post'
					},
					{
						title: '我的预约列表',
						name: 'scheculing-patient-appointment'
					},
					{
						title: '取消预约',
						name: 'scheculing-cancel'
					},
					{
						title: '预约确认患者信息查询',
						name: 'scheculing-op-create-patient'
					},
					{
						title: '预约成功详情',
						name: 'scheculing-op-success'
					},
					{
						title: '获取患者列表页搜索条件form条件',
						name: '/applet/scheduling/patientSchedulingAppointmentForm'
					},

					// 订单相关接口
					{
						title: '支付提交/支付获取',
						name: 'applet-order-getPay'
					},
					{
						title: '获取订单支付渠道列表',
						name: 'applet-order-getPayChannelList'
					},
					{
						title: '支付直接提交',
						name: 'applet-order-getDirectPay'
					},
					{
						title: '获取订单支付状态',
						name: 'applet-order-getOrderPayState'
					},

					// 登录相关接口

					// 科室相关接口
					{
						title: '获取科室列表',
						name: 'applet-department-list'
					},
					{
						title: '获取科室基本信息（名称、图片、介绍）',
						name: 'applet-department-get'
					},
					{
						title: '获取门诊医生信息',
						name: 'applet-department-list-medical-team'
					},
					{
						title: '获取科室动态',
						name: 'applet-department-list-dynamic'
					},
					{
						title: '获取门诊相关视频列表',
						name: 'applet-department-list-video-article'
					},

					{
						title: '获取文章',
						name: 'applet-article-list'
					},

					// 医生相关接口
					{
						title: '获取站点医生列表',
						name: 'applet-doctor-list'
					},
					{
						title: '获取医生基本信息',
						name: 'applet-doctor-get'
					},
					{
						title: '获取医生个人简介等信息',
						name: 'applet-doctor-get-info'
					},
					{
						title: '获取医生门诊信息',
						name: 'applet-doctor-get-department'
					},
					{
						title: '获取出诊信息',
						name: 'applet-op-dailyscheduling-list'
					},
					{
						title: '获取专家风采',
						name: 'applet-doctor-expert-list'
					},

					// 地址相关接口
					{
						title: '获取地址列表',
						name: 'applet-receive-address-get-list'
					},
					{
						title: '获取地址详情',
						name: 'applet-receive-address-get-detail'
					},
					{
						title: '保存修改地址',
						name: 'applet-receive-address-create'
					},
					// 投票管理
					{
						title: '提交投票结果',
						name: 'applet-vote-submit'
					},
					// 医联体
					{
						title: '获取医生申请',
						name: 'doctorApply-page-query'
					},
					{
						title: '新增医生申请',
						name: 'doctorApply-add'
					},
					{
						title: '删除医生申请',
						name: 'doctorApply-delete'
					},
					{
						title: '批量删除医生申请',
						name: 'doctorApply-deleteByIds'
					},
					{
						title: '修改医生申请',
						name: 'doctorApply-update'
					},
					{
						title: '转诊申请',
						name: 'referralApplication-page-query'
					},
					{
						title: '新增转诊申请',
						name: 'referralApplication-add'
					},
					{
						title: '删除转诊申请',
						name: 'referralApplication-delete'
					},
					{
						title: '批量删除转诊申请',
						name: 'referralApplication-deleteByIds'
					},
					{
						title: '修改转诊申请',
						name: 'referralApplication-update'
					},

					{
						title: '获取申请医生',
						name: 'referralApplication-page-queryApplyDoctorList'
					},
					{
						title: '获取申请医院',
						name: 'referralApplication-page-queryApplyHospitalLIst'
					},
					{
						title: '获取预约医院',
						name: 'referralApplication-page-queryReservationHospitalList'
					},
					{
						title: '医生审核',
						name: 'doctorApply-verify'
					},
					{
						title: '转院申请审核',
						name: 'referralApplication-verify'
					},
					{
						title: '获取医生出诊信息',
						name: 'scheduling-appointment-get'
					},
					{
						title: '医生端结束问诊',
						name: 'scheduling-appointment-close'
					}
				]
			}
		},
		{
			path: '/api/enum/part',
			name: 'EnumApi',
			meta: {
				title: '系统枚举API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取系统枚举',
						name: 'api-enum-getSystemEnumByCode'
					},
					{
						title: '获取枚举表中枚举',
						name: 'api-enum-getEnumItemByCode'
					},
					{
						title: '批量获取枚举，包括系统枚举和枚举表数据',
						name: 'api-enum-getBatchEnumByCodes'
					},
					{
						title: '获取枚举，包括系统枚举和枚举表数据',
						name: 'api-enum-getEnumItemByEnumCode'
					},
					{
						title: '获取枚举表中所有枚举',
						name: 'api-enum-getEnumItemAll'
					}
				]
			}
		},
		{
			path: '/api/clinic/setting/part',
			name: 'ClinicSettingApi',
			meta: {
				title: '在线问诊设置API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取医生个人配置',
						name: 'applet-setting-get'
					},
					{
						title: '更新医生个人配置',
						name: 'applet-setting-submit'
					}
				]
			}
		},
		{
			path: '/api/agreement/part',
			name: 'AgreementApi',
			meta: {
				title: '协议API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [
					// 协议相关接口
					{
						title: '获取协议列表',
						name: 'applet-agreement-get-agreement-list'
					},
					{
						title: '获取协议详情',
						name: 'applet-agreement-get-agreement'
					},
					{
						title: '用户同意协议',
						name: 'applet-agreement-approve-agreement'
					}
				]
			}
		},
		{
			path: '/api/generalForm/part',
			name: 'GeneralFormApi',
			meta: {
				title: '自定义表单API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [
					// 自定义表单相关接口
					{
						title: '获取自定义表单列表',
						name: 'applet-general-form-list'
					},
					{
						title: '获取通用表单填报列表',
						name: 'applet-general-form-get-form-result'
					},
					{
						title: '添加通用表单',
						name: 'applet-general-form-create'
					},
					{
						title: '获取通用表单的表单项列表',
						name: 'applet-general-form-field-list'
					},
					{
						title: '添加通用表单字段',
						name: 'applet-general-form-field-create'
					},
					{
						title: '添加通用表单字段选项',
						name: 'applet-general-form-field-option-create'
					},
					{
						title: '删除表单字段/选项值',
						name: 'applet-general-form-field-delete'
					},
					{
						title: '提交通用表单数据',
						name: 'applet-general-form-submit'
					}
				]
			}
		},
		{
			path: '/api/medicareReplyTemplate/part',
			name: 'MedicareReplyTemplateApi',
			meta: {
				title: '回复模板API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取回复模板大分类下模板',
						name: 'applet-medicare-reply-template-list'
					},
					{
						title: '新增回复模板',
						name: 'applet-medicare-reply-template-add'
					},
					{
						title: '更新回复模板',
						name: 'applet-medicare-reply-template-update'
					},
					{
						title: '移动模板顺序',
						name: 'applet-medicare-reply-template-move'
					}
				]
			}
		},
		{
			path: '/api/clinic/part',
			name: 'ClinicApi',
			meta: {
				title: '在线问诊API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取即时通讯签名',
						name: 'applet-tencent-im-sign'
					},
					// 问诊相关接口
					{
						title: '获取医生问诊列表',
						name: 'applet-clinic-get-doctor-clinic-list'
					},
					{
						title: '获取问诊详情',
						name: 'applet-clinic-chat-detail'
					},
					{
						title: '获取问诊号源时段',
						name: 'applet-clinic-doctor-num'
					},
					{
						title: '分页获取问诊历史聊天记录',
						name: 'applet-clinic-chat-history'
					},
					{
						title: '获取患者就诊信息',
						name: 'applet-clinic-get-patient-detail'
					},
					{
						title: '获取诊断提交数据',
						name: 'applet-clinic-chat-get-diagnostic'
					},

					{
						title: '邀请患者--获取医生二维码',
						name: 'applet-clinic-invite-patients'
					},
					{
						title: '获取患者问诊页面信息',
						name: 'applet-clinic-get-clinic-form'
					},
					{
						title: '修改问诊记录',
						name: 'applet-clinic-create-clinic-record'
					},
					{
						title: '获取患者问诊列表',
						name: 'applet-clinic-get-patient-clinic-list'
					},
					{
						title: '获取科室问诊方式类型',
						name: 'applet-clinic-get-department-clinic-chat-type-list'
					},
					{
						title: '获取医生问诊方式类型',
						name: 'applet-clinic-get-doctor-clinic-chat-type-list'
					},
					{
						title: '取消预约记录',
						name: 'applet-clinic-cancel-appointment'
					}
				]
			}
		},
		{
			path: '/api/clinicPrescript/part',
			name: 'ClinicPrescriptApi',
			meta: {
				title: '在线复诊API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [
					// 复诊、处方提交
					{
						title: '获取历史医嘱就诊科室列表查询',
						name: 'applet-clinic-prescript-get-dep'
					},
					{
						title: '获取复诊页面信息',
						name: 'applet-clinic-prescript-get-prescript'
					},
					{
						title: '获取历史处方药品集合',
						name: 'applet-clinic-prescript-get-prescription-list'
					},
					{
						title: '获取复诊出诊医生',
						name: 'applet-clinic-prescript-get-prescript-doctor-list'
					},
					{
						title: '获取配送药品地址',
						name: 'applet-clinic-prescript-get-prescript-distribution'
					},
					{
						title: '复诊详情提交',
						name: 'applet-clinic-prescript-create-prescript-detail'
					},
					{
						title: '获取诊断',
						name: 'applet-clinic-prescript-get-diagnose-list'
					},
					{
						title: '获取药品搜索展示',
						name: 'applet-clinic-prescript-get-drug-search'
					},
					{
						title: '获取药品列表',
						name: 'applet-clinic-prescript-get-drug-list'
					},
					{
						title: '获取复诊列表',
						name: 'applet-clinic-prescript-get-clinic-prescript-list'
					},
					{
						title: '查看续方',
						name: 'applet-clinic-prescript-apply-detail'
					},
					{
						title: '诊断提交',
						name: 'applet-clinic-prescript-diagnosis-submit'
					},
					{
						title: '提交续方',
						name: 'applet-clinic-prescript-submit-diacrisis'
					},
					{
						title: '废除处方诊断',
						name: 'applet-clinic-prescript-abolish'
					},
					{
						title: '医生获取历史处方药品集合',
						name: 'applet-clinic-prescript-get-Doctor-prescription-list'
					},
					{
						title: '医生提交修改处方药品',
						name: 'applet-clinic-prescript-update-doctor-prescription-list'
					},
					{
						title: '获取编辑处方详情',
						name: 'applet-clinic-prescript-get-prescription-detail'
					},
					{
						title: '获取给药途径',
						name: 'applet-clinic-prescript-get-drug-delivery-route'
					},
					{
						title: '暂存处方',
						name: 'applet-clinic-prescript-temporary-storage'
					}
				]
			}
		},
		{
			path: '/api/patientPayment/part',
			name: 'PatientPaymentApi',
			meta: {
				title: '门诊/住院预缴金API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
					title: '获取门诊/住院余额相关信息查询',
					name: 'applet-payment-patient-get'
				}]
			}
		},
		{
			path: '/api/chemical/part',
			name: 'ChemicalApi',
			meta: {
				title: '报告查询API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取报告单查询表单',
						name: 'applet-chemical-form'
					},
					{
						title: '提交报告单查询表单',
						name: 'applet-chemical-submit'
					},
					{
						title: '获取报告单详情',
						name: 'applet-chemical-detail'
					},
					{
						title: '通用列表查询条件',
						name: 'applet-his-get-visit-record-list-form'
					},
					{
						title: '通用列表查询',
						name: 'applet-his-get-visit-record-list'
					},
					{
						title: '通用列表查询(不带搜索样式)',
						name: 'applet-his-get-recipel-list'
					},
					{
						title: '通用详情查询（可带支付）',
						name: 'applet-his-get-pay-record-detail'
					},
					{
						title: '通用详情支付处理',
						name: 'applet-his-pay-record-detail'
					}
				]
			}
		},
		{
			path: '/api/guidance/part',
			name: 'GuidanceApi',
			meta: {
				title: '智能导诊API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '获取智能导诊 - 人体',
						name: 'applet-guidance-image'
					},
					{
						title: '获取智能导诊 - 列表',
						name: 'applet-guidance-list'
					},
					{
						title: '获取智能导诊 - 单个部位疾病列表',
						name: 'applet-guidance-disease-list'
					},
					{
						title: '获取智能导诊 - 疾病详情',
						name: 'applet-guidance-disease-detail'
					}
				]
			}
		},
		{
			path: '/api/triageNum/part',
			name: 'TriageNumApi',
			meta: {
				title: '分诊叫号API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
					title: '患者分诊叫号',
					name: 'applet-patient-triage-num'
				}]
			}
		},
		{
			path: '/api/patient/part',
			name: 'PatientApi',
			meta: {
				title: '患者API接口配置',
				hideInMenu: true,
				hideInBread: true,
				noValidatePrivilege: false,
				noKeepAlive: true,
				privilege: [{
						title: '人脸验证提交',
						name: 'applet-patient-verify'
					},
					{
						title: '同步His患者信息',
						name: 'applet-patient-cogradient-his-patient'
					},
					{
						title: '患者信息删除',
						name: 'applet-patient-delete'
					},
					{
						title: '查看患者就诊码',
						name: 'applet-patient-create-visit-code'
					},
					{
						title: '需要接口验证的患者列表',
						name: 'applet-patient-get-verify-interface-patient-list'
					}
				]
			}
		}
	]
}];
