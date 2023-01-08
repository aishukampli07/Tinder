package com.capstone.tinder.dao;

import org.springframework.data.repository.CrudRepository;

import com.capstone.tinder.entity.ChatMessage;

public interface ChatRepository extends CrudRepository<ChatMessage, String>{

}
