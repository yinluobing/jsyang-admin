module.exports = packageName => (`
@import '~antd/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.tableList {
  .tableListOperator {
    margin-bottom: 16px;
    button {
      margin-right: 8px;
    }
  }
}

.tableListForm {
  :global {
    .ant-form-item {
      margin-bottom: 24px;
      margin-right: 0;
      display: flex;
      > .ant-form-item-label {
        width: auto;
        line-height: 32px;
        padding-right: 8px;
      }
      .ant-form-item-control {
        line-height: 32px;
      }
    }
    .ant-form-item-control-wrapper {
      flex: 1;
    }
  }
  .submitButtons {
    display: block;
    white-space: nowrap;
    margin-bottom: 24px;
  }
}

@media screen and (max-width: @screen-lg) {
  .tableListForm :global(.ant-form-item) {
    margin-right: 24px;
  }
}

@media screen and (max-width: @screen-md) {
  .tableListForm :global(.ant-form-item) {
    margin-right: 8px;
  }
}
`)
