'use client'
import { Alert } from 'keep-react'

export default function AlertC() {
  return (
    <Alert color="primary">
      <Alert.Container>
        <Alert.Icon />
        <Alert.Title>Alert here</Alert.Title>
        <Alert.Description>A short description followed by two actions items.</Alert.Description>
      </Alert.Container>
      <Alert.Link>Learn More</Alert.Link>
      <Alert.Dismiss />
    </Alert>
  )
}