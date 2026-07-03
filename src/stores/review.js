import { reactive } from 'vue'

// 审核向导跨步骤数据
export const reviewStore = reactive({
  contractId: '',
  fileName: '',
  detectedType: '',
  matchConfidence: 0,
  role: '甲方', // 立场：甲方 / 乙方
  // 合同主体识别结果（后端「合同主体识别」返回，mock 先给占位）
  parties: { partyA: '', partyB: '' },
  selectedPoints: [], // 选中的审核点 id

  reset() {
    this.contractId = ''
    this.fileName = ''
    this.detectedType = ''
    this.matchConfidence = 0
    this.role = '甲方'
    this.parties = { partyA: '', partyB: '' }
    this.selectedPoints = []
  },
})
