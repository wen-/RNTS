import URL from 'config/url';

export interface odPrams {
  id?: number;
}

//详情
export async function fetchOrderDetail(apiPrams: odPrams) {
  const params = {
    id: apiPrams.id,
  };
  const res = await fetch(URL.test, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  return await res.json();
}
