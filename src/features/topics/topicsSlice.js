import { createSlice } from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id].quizIds = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(addQuiz, (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        })
    }
})

export const selectTopic = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;