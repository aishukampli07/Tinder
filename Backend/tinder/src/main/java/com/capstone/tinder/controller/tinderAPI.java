package com.capstone.tinder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.tinder.entity.ChatMessage;
import com.capstone.tinder.entity.SwipeDetails;
import com.capstone.tinder.entity.TinderUser;
import com.capstone.tinder.dao.ChatRepository;
import com.capstone.tinder.dao.SwipeRepo;
import com.capstone.tinder.dao.TinderRepo;



@CrossOrigin
@RestController
@RequestMapping("/api")
public class tinderAPI {
	@Autowired
	private ChatRepository chatRepo;
	@Autowired
	private TinderRepo tinderRepo;
	@Autowired
	private SwipeRepo swipeRepo;
	
	@CrossOrigin(origins = "http://localhost:3000/")
	@PostMapping(path="/user_details",consumes = MediaType.APPLICATION_JSON_VALUE)
	  public TinderUser signup(@RequestBody TinderUser newTinderUser) {
		return tinderRepo.save(newTinderUser);
	  }
	
	@GetMapping("/user_details")
	public List<TinderUser> getUser() {
		return (List<TinderUser>) tinderRepo.findAll();
		}
	
	@PutMapping("/user_details/{us}")
	public TinderUser putUser(@RequestBody TinderUser us) {
		
		System.out.println(us);
		
		return tinderRepo.save(us);
		}
	
	@PostMapping("/swipe_details")
	public SwipeDetails  putSwipeUser(@RequestBody SwipeDetails us) {
		return swipeRepo.save(us);
		}
	
	@GetMapping("/swipe_details")
	public List<SwipeDetails> getSwipeUser() {
		return (List<SwipeDetails>) swipeRepo.findAll();
		}
	
	@CrossOrigin(origins = "http://localhost:3000/")
	@GetMapping("/chats")
	public List<ChatMessage> getChats(){
		return (List<ChatMessage>) chatRepo.findAll();
	}
	
	@PostMapping(path="/chats",consumes = MediaType.APPLICATION_JSON_VALUE)
	public ChatMessage postChat(@RequestBody ChatMessage newChat) {
		return chatRepo.save(newChat);
	}
}
