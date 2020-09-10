import  Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import screenComponent from '@/components/home/screenComponent.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import MyComponent from '@/components/MyComponent.vue'

const mockFn = jest.fn()

let Constructor
let vm
let frist
let second

// 초기화
beforeEach(() => {
  Constructor = Vue.extend(HelloWorld)
  vm = new Constructor().$mount()
  frist = vm._data.frist
  second = vm._data.second
})

// Jasmine 2.0 테스트는 다음과 같습니다.
// 원하는 테스트 러너 / 테스트 라이브러리를 사용하십시오
describe('HelloWorld', () => {
  // 원시 컴포넌트 옵션을 검사합니다.
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  // 원시 컴포넌트 옵션에서 함수 결과를 테스트합니다.
  it('sets the correct default data', () => {
    expect(typeof HelloWorld.data).toBe('function')
    const defaultData = HelloWorld.data()
    expect(defaultData.message).toBe('hello!')
  })

  // 마운트 할 때 컴포넌트 인스턴스를 검사합니다.
  it('correctly sets the message when created', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.message).toBe('bye!');
  })
})

// 렌더링 된 텍스트를 마운트하고 반환하는 헬퍼 함수
function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('MyComponent', () => {
  it('renders correctly with different props', () => {
    expect(getRenderedText(MyComponent, {
      msg: 'Hello'
    })).toBe('Hello')

    expect(getRenderedText(MyComponent, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})

describe('screenComponent', ()=>{
  Constructor = Vue.extend(screenComponent)
  vm = new Constructor().$mount()
  it('장비 상태 확인', ()=>{
    expect(vm.deviceData()).toBe('status-dot not')
  })
})