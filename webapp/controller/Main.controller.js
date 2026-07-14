sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("code.d01.approval.btrip.controller.Main", {
        onInit() {
            
        },
        onSelectionChange(oEvent) {
           const oItem = oEvent.getParameter("listItem");
           var oContext = oItem.getBindingContext();
           var sPath = oContext.getPath();
           var oSelectedData = oContext.getProperty();
           let oData = {
                data: oSelectedData,
                path: sPath
           }

           this.getView().setModel(new JSONModel(oData), "sel");
           
        //    if (oItem) {
        //         const oContext = oItem.getBindingContext();
        //         oData = oContext ? oContext.getProperty() : {};

        //    }
           

        //    this.getView().getModel("sel").setData(Object.assign({}, oData));

        },
        onPass(){
            var oView = this.getView();
            var oODataModel = oView.getModel(); // SAP랑 연결된 모델
            var oUpdateModel = oView.getModel("sel"); // JSON Model

            var oData = oUpdateModel.getData();
            oData.data.Stat = 'APR';
            console.log(oData.path);
            oODataModel.update(
                oData.path,
                oData.data,
                {
                    success(oEvent){
                        alert("변경 성공");
                    },
                    error(oEvent){
                        alert("변경 실패");
                    }
                }
            );


        },
        onDeny(){

            var oView = this.getView();
            var oODataModel = oView.getModel(); // SAP랑 연결된 모델
            var oUpdateModel = oView.getModel("sel"); // JSON Model

            var oData = oUpdateModel.getData();
            oData.data.Stat = 'REJ';
            console.log(oData.path);
            oODataModel.update(
                oData.path,
                oData.data,
                {
                    success(oEvent){
                        alert("변경 성공");
                    },
                    error(oEvent){
                        alert("변경 실패");
                    }
                }
            );


        }
    });
});