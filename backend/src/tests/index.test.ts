import request from 'supertest'
import { describe,vi,it,expect } from 'vitest'
import app from '..'

vi.mock('../db')

describe("Check blog routes",()=>{
    it("Check blog bulk route",async ()=>{
        const res = await app.request('/api/v1/blog/post/bulk')
        expect(res.status).toBe(200)
    })
})