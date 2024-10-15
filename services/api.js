import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://jtanbbhbfrsxrgbylyoj.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YW5iYmhiZnJzeHJnYnlseW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMDM5MzcsImV4cCI6MjA0NDU3OTkzN30.ghgO5Ry_Tcm6AGNdZQSJN_43VoeFjaiT7B4Ad9HoRAQ",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YW5iYmhiZnJzeHJnYnlseW9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMDM5MzcsImV4cCI6MjA0NDU3OTkzN30.ghgO5Ry_Tcm6AGNdZQSJN_43VoeFjaiT7B4Ad9HoRAQ"
    }
})