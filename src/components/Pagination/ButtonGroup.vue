<script lang="ts">
import { FileExcelFilled } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
// import { saveAs } from 'file-saver';
// import XLSX from 'xlsx-style';

export default defineComponent({
  name: 'ButtonGroup',
  components: { FileExcelFilled },
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    fileName: {
      type: String,
      default: 'data.xlsx'
    }
  },
  // emits: ['update:modelValue'],
  // methods: {
  //   handleClick(index: number) {
  //     this.$emit('update:modelValue', index);
  //   }
  // }
  methods: {
    downloadExcel() {
      //   const worksheet = XLSX.utils.json_to_sheet(this.dataSource, {
      //     header: this.columns.map((column) => column.title)
      //   });
      //   const workbook = XLSX.utils.book_new();
      //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      //   // Set column widths
      //   const ws = workbook.Sheets['Sheet1'];
      //   const columnWidths = this.columns.map((column, index) => {
      //     const columnName = XLSX.utils.encode_col(index);
      //     const columnData = Object.keys(ws)
      //       .filter((key) => key.startsWith(columnName))
      //       .map((key) => ws[key]);
      //     const maxContentLength = columnData.reduce(
      //       (max, cell) =>
      //         Math.max(max, cell.v.toString().length * 1.5, column.title.length),
      //       column.title.length
      //     );
      //     return { wch: maxContentLength };
      //   });
      //   ws['!cols'] = columnWidths;
      //   // Style header cells
      //   const headerStyle = {
      //     fill: {
      //       fgColor: { rgb: 'D3D3D3' }
      //     },
      //     font: {
      //       bold: true
      //     }
      //   };
      //   const headerRange = XLSX.utils.decode_range(ws['!ref']);
      //   for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
      //     const headerCell = XLSX.utils.encode_cell({
      //       r: headerRange.s.r,
      //       c: col
      //     });
      //     ws[headerCell].s = headerStyle;
      //   }
      //   // Generate the Excel file
      //   const excelBuffer = XLSX.write(workbook, {
      //     bookType: 'xlsx',
      //     type: 'array'
      //   });
      //   // Save the file using FileSaver.js
      //   const excelData = new Blob([excelBuffer], {
      //     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      //   });
      //   saveAs(excelData, this.fileName);
    }
  }
});
</script>

<template>
  <a-row :gutter="[8, 0]" justify="center" align="middle">
    <a-col>
      <a-button class="button-search button-text">데이터 조회</a-button>
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
