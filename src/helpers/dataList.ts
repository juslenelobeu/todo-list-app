import { ListProps } from "../typings/index.ds"
import { data } from '../mock/data-list.json'

export default function dataListTodo() {
  const dataList: ListProps[] = data
  return dataList
}