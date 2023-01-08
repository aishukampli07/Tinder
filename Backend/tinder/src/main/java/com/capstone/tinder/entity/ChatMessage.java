package com.capstone.tinder.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="messages")
public class ChatMessage {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    private String senderName;
    private String recipientName;
    private String message;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getSenderName() {
		return senderName;
	}
	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}
	public String getRecipientName() {
		return recipientName;
	}
	public void setRecipientName(String recipientName) {
		this.recipientName = recipientName;
	}
	@Override
	public String toString() {
		return "ChatMessage [id=" + id + ", senderName=" + senderName + ", recipientName=" + recipientName
				+ ", message=" + message + "]";
	}
	
    
    
}
