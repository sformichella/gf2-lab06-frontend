import request from 'superagent';

const URL = 'https://limitless-lowlands-57794.herokuapp.com'

export async function getTheorem(id) {
    const response = await request.get(`${URL}/theorems/${id}`);

    return JSON.parse(response.text);
}

export async function getTheorems() {
    const response = await request.get(`${URL}/theorems`);

    return JSON.parse(response.text);
}

export async function getFields() {
    const response = await request.get(`${URL}/fields`);

    return JSON.parse(response.text);
}

export async function updateTheorem(id, newTheorem) {
    await request.put(`${URL}/theorems/${id}`)
        .send(newTheorem);
}

export async function deleteTheorem(id) {
    await request.delete(`${URL}/theorems/${id}`)
}
