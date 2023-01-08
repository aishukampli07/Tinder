package com.capstone.tinder.entity;

import java.util.ArrayList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="swipe_details")
public class SwipeDetails {
	
     @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String sender_emailid;
	private String receiver_emailid;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSender_emailid() {
		return sender_emailid;
	}
	public void setSender_emailid(String sender_emailid) {
		this.sender_emailid = sender_emailid;
	}
	public String getReceiver_emailid() {
		return receiver_emailid;
	}
	public void setReceiver_emailid(String receiver_emailid) {
		this.receiver_emailid = receiver_emailid;
	}
	@Override
	public String toString() {
		return "SwipeDetails [id=" + id + ", sender_emailid=" + sender_emailid + ", receiver_emailid="
				+ receiver_emailid + "]";
	}
	
	
	
	
	

}
