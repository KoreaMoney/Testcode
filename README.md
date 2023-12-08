# Test Library Jest
## Jest라이브러리의 기본 사용법을 작성합니다.

## test시작
### npm test

### 기능에 대한 정리
1. https://github.com/KoreaMoney/Testcode-jest/blob/main/fn.test.js
2. https://github.com/KoreaMoney/Testcode-jest/blob/main/async/test/fn.test.js
3. https://github.com/KoreaMoney/Testcode-jest/blob/main/mock/test/fn.test.js
4. 추가 내용 정리 : https://github.com/KoreaMoney/React-jest/blob/main/src/components/test/JoinButton.test.js

## 자주 사용하는 기능
### toBe
### toEqual or toStrictEqual
### toBeNull or toBeUndefined or toBeDefined
### toBeTruthy or toBeFalsy
### toBeGreaterThan or toGreaterThanOrEqualBe
### toBeLessThan or toBeLessThanOrEqual
### toMatch
### toContain
### toThrow
### 비동기 처리방식 (Promise, async & await)
### beforeEach & afterEach
### mock함수

## 추가 기능내용
### getByRole : 어떤 역할을 하는 것인지 가져위해 사용한다.
### getByText : text 태그에서 text를 가져오기 위해 사용한다.
### getByRole의 들어가는 값
  - heading : h태그를 말한다. (h1~h6)
  - button : button
  - a : link
  - checkBox : checkBox
  - radio : radio
  - select : combobox
### toBeInTheDocument : document안에 존재하는지 확인한다.
### toBeDisabled : disable 옵션이 적용되어 있는지 확인한다.(다시말해 비활성여부를 확인한다.)
### toBeEnabled : enable 옵션이 적용되어 있는지 확인한다.(다사말해 활성여부를 확인한다.)
### toHaveStyle : style을 가지고 있는지 확인한다.
### getByDisplayValue : value의 값을 찾아 test할 수 있다.
### getByRole("textbox")가 중첩될 경우 :getByRole 대신 label을 사용할 경우 getByLabelText("이름")을 작성한다.
### getByRole에서 heading항목이 두개 이상이라면, 여러개의 heading에서 하나를 선택하고 싶다면 level로 몇번째 heading인지 알려주면 정상적으로 다시 test가 진행된다.

