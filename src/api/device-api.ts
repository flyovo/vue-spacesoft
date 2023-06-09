import request from '@/utils/request';

/*
    list : 장비 리스트
    site_pos_list : 사이트 관리 리스트
*/
export const getDevice = (data: any) =>
  request({
    url: `/dev/${data.type}`,
    method: 'get',
    params: data.params
  });

/*
    setSitePos : 그룹관리 화면에서 사용 사이트 관리 추가 및 수정
    delSitePos : 그룹관리 화면에서 사용 사이트 관리 삭제
    saveDev : 기기설정 화면 추가 및 수정
    delDev : 기기정보 삭제
*/
export const updateDevice = (data: any) =>
  request({
    url: `/dev/setSitePos`,
    method: 'post',
    params: data
  });

export const deleteDevice = (data: any) =>
  request({
    url: `/dev/delSitePos`,
    method: 'post',
    params: data
  });
