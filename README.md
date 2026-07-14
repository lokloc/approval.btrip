<!-- codex-summary:start -->
# approval.btrip

An SAP Fiori application.

## 구현 기능 요약

### App 화면

- 역할: 화면 정보 표시와 사용자 입력 처리

### 출장 요청 목록 화면

- 역할: 목록 조회 및 항목 선택, 상세 정보 표시·편집, 업무 명령 실행
- 주요 항목: 선택한 출장 요청 정보, 출장 요청 목록, 출장 요청 ID, 직원 ID, 출장 목적지, 출장 시작일, 출장 종료일, 예산 금액
- 사용자 동작: Pass [onPass], Deny [onDeny], 항목 선택 [onSelectionChange]
- 처리 내용: 입력값 또는 선택 데이터를 수정

## 실행 방법

```bash
npm install
npm start
```

<!-- codex-summary:end -->

## 기존 문서

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Wed Mar 04 2026 16:01:15 GMT+0900 (Korean Standard Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.19.3|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>Basic V2|
|**Service Type**<br>SAP System (ABAP On-Premise)|
|**Service URL**<br>http://61.97.134.36:8000/sap/opu/odata/sap/ZGW_D01_EXAM_SRV|
|**Module Name**<br>approval.btrip|
|**Application Title**<br>異쒖옣?붿껌 寃곗옱泥섎━|
|**Namespace**<br>code.d01|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.120.23|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## approval.btrip

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)
