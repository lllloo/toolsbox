import Swal from 'sweetalert2'

/**
 * 顯示錯誤訊息
 */
export const alertError = (info: string) => {
  Swal.fire(info)
}
