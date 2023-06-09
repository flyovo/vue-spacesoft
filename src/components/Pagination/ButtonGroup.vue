<script lang="ts">
import { FileExcelFilled } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import { Excel } from 'antd-table-saveas-excel';
import { IColumn } from '@/views/Content/constants';

export default defineComponent({
  name: 'ButtonGroup',
  components: { FileExcelFilled },
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    columns: {
      type: Array as () => IColumn[],
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    },
    fileName: {
      type: String,
      default: 'data.xlsx'
    }
  },
  setup(props) {
    const downloadExcel = () => {
      const excel = new Excel();
      excel
        .addSheet('Sheet')
        .addColumns(props.columns)
        .addDataSource(props.dataSource, {
          str2Percent: true
        })
        .saveAs(`${props.fileName}`);
    };

    return {
      downloadExcel
    };
  }
});
</script>

<template>
  <a-row :gutter="[8, 0]" justify="center" align="middle">
    <a-col>
      <a-button class="button-search button-text" @click="onSubmit">
        데이터 조회
      </a-button>
    </a-col>
    <a-col>
      <a-button class="button-excel button-text" @click="downloadExcel">
        <FileExcelFilled />엑셀 저장
      </a-button>
    </a-col>
  </a-row>
</template>

<style lang="scss" scoped>
.button-text {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
}

.button-search,
.button-search:hover,
.button-search:focus {
  width: 100px;
  height: 30px;
  border: solid 1px #2f3942;
  background: #36424d;
  color: #fff;
}
.button-excel,
.button-excel:hover,
.button-excel:focus {
  width: 100px;
  height: 30px;
  border: solid 1px #185c37;
  background: #107c41;
  color: #fff;
}
</style>
